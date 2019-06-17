.SILENT:
.PHONY: build test

## Colors
COLOR_RESET   = \033[0m
COLOR_INFO    = \033[32m
COLOR_COMMENT = \033[33m

## Help
help:
	printf "${COLOR_COMMENT}Usage:${COLOR_RESET}\n"
	printf " make [target]\n\n"
	printf "${COLOR_COMMENT}Available targets:${COLOR_RESET}\n"
	awk '/^[a-zA-Z\-\_0-9\.@]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")); \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			printf " ${COLOR_INFO}%-16s${COLOR_RESET} %s\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)

###############
# Environment #
###############

## Setup environment
setup:
	vagrant up --no-provision
	vagrant provision

## Update environment
update: export ANSIBLE_TAGS = manala.update
update:
	vagrant provision

## Update ansible
update-ansible: export ANSIBLE_TAGS = manala.update
update-ansible:
	vagrant provision --provision-with ansible

## Provision environment
provision: export ANSIBLE_EXTRA_VARS = {"manala":{"update":false}}
provision:
	vagrant provision --provision-with app

## Provision nginx
provision-nginx: export ANSIBLE_TAGS = manala_nginx
provision-nginx: provision

## Provision php
provision-php: export ANSIBLE_TAGS = manala_php
provision-php: provision


###########
# Install #
###########

## Install application
install-app: composer-install init-db
install-app:
	bin/console cache:clear
	yarn install
	yarn build:dev

install-app@test: composer-install init-db@test
install-app@test:
	APP_ENV=test bin/console cache:clear
	yarn install
	yarn build:dev

################
# Common tasks #
################

composer-install:
	composer install --verbose --no-interaction

init-db:
	bin/console doctrine:database:drop --force --if-exists --no-interaction
	bin/console doctrine:database:create --no-interaction
	bin/console doctrine:schema:update --force --no-interaction
	# bin/console doctrine:migrations:migrate --no-interaction

init-db@test:
	APP_ENV=test bin/console doctrine:database:drop --force --if-exists --no-interaction
	APP_ENV=test bin/console doctrine:database:create --no-interaction
	APP_ENV=test bin/console doctrine:schema:update --force --no-interaction
	# APP_ENV=test bin/console doctrine:migrations:migrate --no-interaction
