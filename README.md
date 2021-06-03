# Symfony App Template

## Fonctionnalités

- Images docker pour MariaDB, PostgreSQL, et Redis (configurable dans le `.manala.yaml`)
- Symfony 5.2
- Knp Doctrine extensions & Fixtures
- API Platform
- TailwindCSS (mode JIT) et le plugin pour les formulaires
- Webpack Encore, Babel, TypeScript, Vue, JSX
- Symfony UX (Stimulus Bridge)
- PHPStan, PHP-CS-Fixer, PHP_CodeSniffer, Rector, ESLint, Prettier
- PHPUnit, phpspec, Cypress, Jest (avec le support de Vue & JSX)
- Hooks de pré-commit via Husky et lint-staged
- Sentry (PHP et JS) configuré
- GitHub Actions configuré

## Utiliser ce template

- Cliquer sur le bouton `Use this template`
- Éditer le fichier `README_APP.md` :
  - Modifier les badges GitHub Actions
  - Modifier les liens d'accès à l'application en local, pre-prod et prod
- Remplacer le fichier `README.md` par le fichier `README_APP.md`
- Modifier le contenu de la variable `APP_ENV` du fichier `.env`

---

## Installer PHP sur sa machine

Sur un OS Debian ou Ubuntu, il est recommandé d'utiliser le [PPA ondrej/php](https://launchpad.net/~ondrej/+archive/ubuntu/php/)
qui permet d'installer facilement plusieurs versions de PHP. Il est également possible d'utiliser [phpenv](https://github.com/phpenv/phpenv-installer) ou [brew](https://formulae.brew.sh/formula/php).

Pour le PPA ondrej/php :

```shell
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update

install_php() {
  VERSION=$1
  sudo apt install php$VERSION \
     php$VERSION-{zip,opcache,acpu,xdebug,fpm} \
     php$VERSION-{pgsql,mysql} \
     php$VERSION-{intl,curl,mbstring,xml,gd}
}

install_php 7.4
install_php 8.0
```

:warning: Il faut utiliser `symfony php` et `symfony composer` au lieu de `php` et `composer` directement pour plusieurs raisons :

- `symfony php` utilise la version de PHP requise par le projet grâce au fichier `.php-version`, donc pas de soucis de versions
- grâce à son [intégration Docker](https://symfony.com/doc/current/setup/symfony_server.html#docker-integration), il est capable
  de créer des variables d'environnement à la volée (ex : `DATABASE_APP_URL`, `REDIS_URL`) en fonction des containers Docker allumés.
  Ce qui est nécessaire pour installer les dépendances, faire booter Symfony, etc...

### Activer/désactiver XDebug

L'extension XDebug est activée par défaut après son installation. Il n'est pas souhaitable que XDebug soit tout le temps activé pour des raisons de performances.
Pour désactiver XDebug pour toutes les versions de PHP et pour toutes les SAPI (CLI, FPM, ...), lancer `sudo phpdismod -v ALL -s ALL xdebug`.

Pour activer XDebug sur un projet, il faut modifier le `php.ini` **du projet** et y rajouter les lignes suivantes :

```ini
zend_extension=xdebug.so
xdebug.remote_enable=1
xdebug.remote_autostart=1
```

Pour vérifier si XDebug est bien activé, lancer `symfony php-fpm -i | grep xdebug` et plusieurs lignes devraient s'afficher.

## Installer Node.js sur sa machine

Sur un OS Debian, Ubuntu ou macOS, il est recommandé d'utiliser [nvm](https://github.com/nvm-sh/nvm) qui permet d'installer et utiliser
très simplement plusieurs versions de Node.js.
Suivre les étapes d'installation via https://github.com/nvm-sh/nvm#installing-and-updating.

Il faudra ensuite lancer `nvm use` dans le dossier du projet pour automatiquement utiliser la bonne version de Node.js (renseignéee dans
le fichier `.nvmrc`).

L'installation de `yarn` se fait via un `npm intall --global yarn`.

Pour ceux utilisant zsh, il est possible d'utiliser le plugin [](https://github.com/aspirewit/zsh-nvm-auto-switch)
qui permet d'automatiquement lancer `nvm use` lorsqu'un fichier `.nvmrc` est détecté.

## Configurer XDebug avec PHPStorm

Ouvrir les paramètres et se rendre dans `Appareance & Behavior > System Settings > HTTP Proxy` :

- Cocher `Auto-detect proxy settings`
- Cocher `Automatic proxy configuration URL` et remplir avec `http://127.0.0.1:7080/proxy.pac`

![image](https://user-images.githubusercontent.com/2103975/114427235-2fea3580-9bbb-11eb-9a9a-4330f946ec83.png)

On va tester si PHP et le serveur Symfony sont parfaitement configurés pour faire fonctionner XDebug :

- Se rendre sur `Run > Web Server Debug Validation`
- Cocher `Local Web Server or Shared Folder`
- Path to create validation script : sélectionner le chemin **public** de l'application
- Url to validation script : l'URL d'accès à l'application
- Puis cliquer sur `Validate`

![image](https://user-images.githubusercontent.com/2103975/114427717-a850f680-9bbb-11eb-9868-ea507c20f83c.png)

Dans le navigateur :

- Installer l'extension [XDebug Helper](https://github.com/mac-cain13/xdebug-helper-for-chrome)
- Sur l'interface de configuration de l'extension :
  - IDE Key : sélectionner `PhpStorm`

### Utilisation

- Dans PHPStorm, cliquer sur le bouton `Start Listening for PHP Debug Connections`
- Dans le navigateur, activer le debug XDebug et naviguer sur une page de l'application

Si tout s'est bien passé, PHPStorm réagit à la connexion entrante et le débugguer s'affiche.
