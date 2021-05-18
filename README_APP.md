# App Name

![CI](https://github.com/Yproximite/symfony-app-template/workflows/CI/badge.svg)
![CI (develop)](https://github.com/Yproximite/symfony-app-template/workflows/CI/badge.svg?branch=develop)

**Accès :**

- Local (dev) : `symfony serve`, https://symfony-app-template.io
- Local (test) : `APP_ENV=test symfony serve`, https://symfony-app-template.io
- Local (prod) : `APP_ENV=prod symfony serve`, https://symfony-app-template.io
- Pre-Prod : https://demo.symfony-app-template.fr
- Prod : https://symfony-app-template.fr

## Requirements

### Dev

- Make
- [Symfony CLI](https://symfony.com/doc/current/setup/symfony_server.html)
- PHP installé en local, voir [les étapes d'installation](https://github.com/Yproximite/symfony-app-template#installer-php-sur-sa-machine)
- Node.js installé en local, voir [les étapes d'installation](https://github.com/Yproximite/symfony-app-template#installer-php-sur-sa-machine)
- Tous ceux listés dans les [requirements de la recipe manala `yprox.app-docker`](https://github.com/Yproximite/manala-recipes/tree/main/yprox.app-docker#requirements)

### Prod

...

## Mise en route du projet

Depuis le dossier racine du projet, faire :

```shell
# On vérifie que la recipe `yprox.app-docker` est bien synchronisée avec le projet
$ manala up

# Configure Symfony CLI (certificat HTTPS, proxy...), construit les containes Docker
$ make setup
```

Puis démarrer le serveur web :

```shell
$ symfony serve
```

## Opérations de maintenance

Les opérations "communes" (démarrer/stoper les containers Docker, etc...) sont listées [ici](https://github.com/Yproximite/manala-recipes/tree/main/yprox.app-docker#docker-interaction).

### Re-synchroniser l'application après changement de branche

```shell
$ make install-app
```

## Lancer Cypress

Il faut lancer le server Symfony en environnement de test :

```shell
APP_ENV=test symfony serve
```

Puis lancer Cypress:

```shell
yarn cypress
```

## Outils (UI base de données, Redis...)

Voir https://github.com/Yproximite/manala-recipes/tree/main/yprox.app-docker#tools.
