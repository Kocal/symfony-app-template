const path = require('path');
const Encore = require('@symfony/webpack-encore'); // eslint-disable-line import/no-extraneous-dependencies
const dotenv = require('dotenv');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

// Manually define `process.env.NODE_ENV`, since Encore does not do it already. Can be useful for TailwindCSS/PurgeCSS.
process.env.NODE_ENV = process.env.NODE_ENV || (Encore.isProduction() ? 'production' : 'development');

Encore
  // directory where compiled assets will be stored
  .setOutputPath('public/build/')
  // public path used by the web server to access the output path
  .setPublicPath('/build')
  // only needed for CDN's or sub-directory deploy
  // .setManifestKeyPrefix('build/')

  .addAliases({
    '@app': path.resolve(__dirname, 'assets/app/'),
  })

  /*
   * ENTRY CONFIG
   *
   * Add 1 entry for each "page" of your app
   * (including one that's included on every page - e.g. "app")
   *
   * Each entry will result in one JavaScript file (e.g. app.js)
   * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
   */
  .addEntry('app', './assets/app')
  .addEntry('email', './assets/email/foundation.scss')
  .addEntry('email-responsive', './assets/email/foundation.responsive.css')
  .addEntry('page.home', './assets/pages/home')

  // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
  .splitEntryChunks()

  // will require an extra script tag for runtime.js
  // but, you probably want this, unless you're building a single-page app
  .enableSingleRuntimeChunk()

  /*
   * FEATURE CONFIG
   *
   * Enable & configure other features below. For a full
   * list of features, see:
   * https://symfony.com/doc/current/frontend.html#adding-more-features
   */
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  // enables hashed filenames (e.g. app.abc123.css)
  .enableVersioning(Encore.isProduction())
  .disableCssExtraction(Encore.isDevServer())

  // enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
  .enableStimulusBridge('./assets/controllers.json')

  // enables Vue support
  .enableVueLoader((vueLoaderOptions) => {
    // Remove attributes `data-testid` and `:data-testid` when building for production.
    // Those attributes are used to make end-to-end tests easier to write and read.
    if (Encore.isProduction()) {
      vueLoaderOptions.compilerOptions = vueLoaderOptions.compilerOptions || {};
      vueLoaderOptions.compilerOptions.modules = vueLoaderOptions.compilerOptions.modules || [];
      vueLoaderOptions.compilerOptions.modules.push({
        preTransformNode(astEl) {
          ['data-testid', ':data-testid'].forEach((dAttr) => {
            if (astEl.attrsMap[dAttr]) {
              delete astEl.attrsMap[dAttr];
              astEl.attrsList = astEl.attrsList.filter((x) => x.name !== dAttr);
            }
          });

          return astEl;
        },
      });
    }
  })

  // enables Sass/SCSS support
  .enableSassLoader()

  // enables PostCSS support
  .enablePostCssLoader()

  // enable TypeScript support
  .enableBabelTypeScriptPreset()

  // uncomment to get integrity="..." attributes on your script & link tags
  // requires WebpackEncoreBundle 1.4 or higher
  // .enableIntegrityHashes()

  // uncomment if you're having problems with a jQuery plugin
  // .autoProvidejQuery()

  // Configure environment variables to inject into assets
  // Global env vars from `process.env` take priority over env vars from `.env` file.
  .configureDefinePlugin((options) => {
    const env = dotenv.config();
    if (env.error) {
      throw env.error;
    }

    ['SENTRY_DSN'].forEach((envVar) => {
      options['process.env'][envVar] = JSON.stringify(process.env[envVar] || env.parsed[envVar]);
    });
  })

  .configureDevServerOptions((options) => {
    options.firewall = false;
    options.https = {
      ...options.https,
      pfx: path.join(process.env.HOME, '.symfony/certs/default.p12'),
    };
  });

// When passing args --analyze
if (process.argv.includes('--analyze')) {
  Encore.addPlugin(new BundleAnalyzerPlugin({ analyzerHost: '0.0.0.0' }));
}

module.exports = Encore.getWebpackConfig();
