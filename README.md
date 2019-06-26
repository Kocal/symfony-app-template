# Symfony App Template

[![Build Status](https://travis-ci.com/Kocal/symfony-app-template.svg?branch=master)](https://travis-ci.com/Kocal/symfony-app-template)

## Functionnalities

- A Virtual Machine with PHP 7.3, NodeJS 10, PostgreSQL 10, Redis
- Symfony 4.3 for web app
- Doctrine Extensions & Fixtures
- API Platform & API key authentication
- Webpack Encore with Vue/JSX support

### Quality tools

- PHPStan
- PHP-CS-Fixer
- SensioLabs Security Checker
- ESLint
- Stylelint
- Prettier

### Testing tools

- PHPUnit, for unit tests (PHP)
- phpspec, for spec tests (PHP)
- Behat (with Mink & Behatch Contexts), for functionnal tests (PHP)
- Jest (with Vue & JSX support), for unit tests (JS)
- Cypress, for functionnal/E2E tests (JS, in the browser)

### Misc

- A pre-commit hook to prettify `.php`, `.js(x)`, `.vue`, `.json`, `.y(a)ml`, and `.md` files
- A Vagrant wrapper to ensure commands are run in the VM (e.g.: `./vagrant-wrapper sf clear:cache` inside or outside the VM)
- Installed Sentry (PHP & JS) (configure `SENTRY_DSN` in `.env` file)
- Configured Travis

## Use this template

- Click on the green button `Use this template`
- Edit the file `README_APP.md` :
  - Update Travis badge
  - Update access links to the app
- Update occurences of `symfony-app-template`, `SymfonyAppTemplate`, ...by your app name
- Replace file `README.md` by the file `README_APP.md`
