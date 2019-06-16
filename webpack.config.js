const path = require('path');
const Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    .addAliases({
        '@app': path.resolve(__dirname, 'assets/app/')
    })

    .addExternals({
        routing: 'Routing',
        'bazinga-translator': 'Translator'
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

    // enable ESLint loader
    .enableEslintLoader(options => {
        delete options.parser;
    })
    .configureLoaderRule('eslint', loader => {
        loader.test = /\.(jsx?|vue)$/;
    })

    // enables Vue support
    .enableVueLoader((vueLoaderOptions) => {
        // Remove attributes `data-testid` and `:data-testid` when building for production.
        // Those attributes are used to make end-to-end tests easier to write and read.
        if (Encore.isProduction()) {
            vueLoaderOptions.compilerOptions = vueLoaderOptions.compilerOptions || {};
            vueLoaderOptions.compilerOptions.modules = vueLoaderOptions.compilerOptions.modules || [];
            vueLoaderOptions.compilerOptions.modules.push({
                preTransformNode(astEl) {
                    ['data-testid', ':data-testid'].forEach(dAttr => {
                        if (astEl.attrsMap[dAttr]) {
                            delete astEl.attrsMap[dAttr];
                            astEl.attrsList = astEl.attrsList.filter(x => x.name !== dAttr);
                        }
                    });

                    return astEl;
                },
            });
        }
    })

    // enables Sass/SCSS support
    .enableSassLoader(options => {
        options.implementation = require('sass');
    })

    // enables PostCSS support
    .enablePostCssLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes()

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()

    .configureWatchOptions(watchOptions => {
        watchOptions.poll = 250;
    })
;

module.exports = Encore.getWebpackConfig();
