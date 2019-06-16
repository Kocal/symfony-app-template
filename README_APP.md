# App Name

[![Build Status](https://travis-ci.com/Yproximite/symfony-app-template.svg)](https://travis-ci.com/Yproximite/symfony-app-template)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Yproximite/symfony-app-template/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/Yproximite/symfony-app-template/?branch=master)

**Accès :**

- Local : http://symfony-app-template.vm
- Local (dev) : http://symfony-app-template.vm:8000
- Local (prod) : http://symfony-app-template.vm:8001
- Pre-Prod : https://demo.symfony-app-template.fr
- Prod : https://symfony-app-template.fr

## Requirements

### Dev

- Make
- [VirtualBox 5.2.4+](https://www.virtualbox.org/wiki/Downloads)
- [Vagrant 2.2.1+](https://www.vagrantup.com/downloads.html)
- [Vagrant Landrush 1.2.0+](https://github.com/vagrant-landrush/landrush)

### Prod

...

## Lancer pour la première fois la VM

Depuis le dossier racine du projet, faire:

    $ make setup
    $ vagrant ssh
    $ make install-app

## Opérations de maintenance

### Démarrer la VM

    # à executer en dehors de la VM
    $ vagrant up

### Se connecter à la VM

    # à executer en dehors de la VM
    $ vagrant ssh

### Re-synchroniser l'application après changement de branche

    # à executer dans la VM
    $ make install-app

### Mettre à jour la VM

    # à executer en dehors de la VM
    $ make update

## Outils locaux

- [phpMyAdmin](http://symfony-app-template.vm:1979/)
- [phpRedisAdmin](http://symfony-app-template.vm:1981/)
- [MailHog](http://symfony-app-template.vm:8025/)
- [OPCache Dashboard](http://symfony-app-template.vm:2013/)
