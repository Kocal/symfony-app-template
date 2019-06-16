# Symfony App Template

## Fonctionnalités

- Une VM configurée aux petits oignons
- PHP 7.3
- NodeJS 10
- MariaDB 13 (installé et configuré) et PostgreSQL 10 (nécessite de dé-commenter certaines parties du code)
- Redis
- Symfony 4.3.1
- PHPStan, PHP-CS-Fixer, SensioLabs Security Checker
- PHPUnit, phpspec, Behat, Cypress, Jest
- Webpack Encore, Vue, JSX, ESLint/Prettier
- Hooks de pré-commit
- Un wrapper Vagrant
- Travis configuré
- Scrutinizer configuré

## Utiliser ce template

- Cliquer sur le bouton `Use this template`
- Éditer le fichier `README_APP.md` :
  - Modifier le badge Travis
  - Modifier le badge Scrutinizer (configurer l'app sur Scrutinizer, la configuration se situe dans le fichier `.scrutinizer.yml`)
  - Modifier les liens d'accès à l'application en local, pre-prod et prod
- Modifier les occurences de `symfony-app-template`, `SymfonyAppTemplate`, ...
- Remplacer le fichier `README.md` par le fichier `README_APP.md`
