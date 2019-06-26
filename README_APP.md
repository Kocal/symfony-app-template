# App Name

[![Build Status](https://travis-ci.com/Kocal/symfony-app-template.svg?branch=master)](https://travis-ci.com/Kocal/symfony-app-template)

**Access:**

- Local: http://symfony-app-template.vm
- Local (dev env) : http://symfony-app-template.vm:8000
- Local (prod env) : http://symfony-app-template.vm:8001
- Pre-Prod: https://demo.symfony-app-template.fr
- Prod: https://symfony-app-template.fr

## Requirements

### Dev

- Make
- [VirtualBox 5.2.4+](https://www.virtualbox.org/wiki/Downloads)
- [Vagrant 2.2.1+](https://www.vagrantup.com/downloads.html)
- [Vagrant Landrush 1.2.0+](https://github.com/vagrant-landrush/landrush)

### Prod

- PHP 7.3
- PostgreSQL 10
- Node.js and Yarn

## Run the Virtual Machine for the first time

From the project root, run:

```bash
$ make setup
$ vagrant ssh
# in the VM
$ make install-app
```

## Maintenance operations

### Run the VM

```bash
# to run outside the VM
$ vagrant up
```

### Connect to the VM

```bash
# to run outside the VM
$ vagrant ssh
```

### Re-sync the app (when changing git branch)

```bash
# to run inside the VM
$ make install-app
```

### Update the VM

```bash
# to run outside the VM
$ make update
```

## Local tools

- [phpPgAdmin](http://symfony-app-template.vm:1980/)
- [phpRedisAdmin](http://symfony-app-template.vm:1981/)
- [MailHog](http://symfony-app-template.vm:8025/)
- [OPCache Dashboard](http://symfony-app-template.vm:2013/)
