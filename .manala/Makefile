# Relative root dir ("."|".."|"../.."|…)
_ROOT_DIR := $(patsubst ./%,%,$(patsubst %/.manala/Makefile,%,./$(filter %.manala/Makefile,$(MAKEFILE_LIST))))
# Is current dir root ? (""|"1")
_ROOT := $(if $(filter .,$(_ROOT_DIR)),1)
# Relative current dir ("."|"foo"|"foo/bar"|…)
_DIR := $(patsubst ./%,%,.$(patsubst $(realpath $(CURDIR)/$(_ROOT_DIR))%,%,$(CURDIR)))

include $(_ROOT_DIR)/.manala/make/text.mk
include $(_ROOT_DIR)/.manala/make/help.mk
include $(_ROOT_DIR)/.manala/make/os.mk
include $(_ROOT_DIR)/.manala/make/git.mk

.DEFAULT_GOAL := help

user := $(shell id -u)
group := $(shell id -g)

dc := USER_ID=$(user) GROUP_ID=$(group) docker-compose
symfony := symfony
php := $(symfony) php
composer := $(symfony) composer

HELP += $(call help_section, Environment)

HELP += $(call help,setup,             Setup the development environment)
setup: setup-symfony
	$(MAKE) up
	$(setup)
	@echo
	@$(call message_success, The development environment has been successfully set up.)
	@echo

HELP += $(call help,setup@integration, Setup the integration environment)
setup@integration: export APP_ENV=test
setup@integration: setup-symfony@integration
	$(MAKE) _up
	$(setup_integration)
	@echo
	@$(call message_success, The integration environment has been successfully set up.)
	@echo

setup-symfony:
	$(symfony) server:ca:install
	$(symfony) proxy:start
	$(MAKE) setup-domain

setup-symfony@integration:
	$(symfony) server:ca:install

setup-domain:
	$(symfony) proxy:domain:attach symfony-app-template

_up:
	$(dc) up --detach database redis

	@$(call message_warning, Waiting for the database to be ready...)
	@until docker inspect -f {{.State.Health.Status}} `$(dc) ps -q database` | grep -q "healthy"; do \
      $(call message_warning, Waiting...); \
      sleep 1; \
	done
	@$(call message_success, The database is ready!)

HELP += $(call help,up,                Start the development environment)
up:
	$(MAKE) _up
	$(symfony) proxy:start
	@echo
	@$(call message_success, You can now run the Symfony server)
	@echo

HELP += $(call help,halt,              Stop the development environment)
halt:
	$(dc) stop

HELP += $(call help,destroy,           Destroy the development environment)
destroy: halt
	$(dc) down --volumes
	@echo
	@$(call message_error, ALL CONTAINERS HAVE BEEN DESTROYED)
	@echo

HELP += $(call help_section, Development tools)HELP += $(call help,run-phppgadmin,    Start a PhpPgAdmin web interface)
run-phppgadmin:
	$(dc) up --detach phppgadmin
	@echo
	@$(call message_success, You can now open http://`$(dc) port phppgadmin 8080` to access PhpPgAdmin)
	@echo



HELP += $(call help,run-phpredisadmin, Start a PhpRedisAdmin web interface)
run-phpredisadmin:
	$(dc) up --detach phpredisadmin
	@echo
	@$(call message_success, You can now open http://`$(dc) port phpredisadmin 80` to access PhpRedisAdmin)
	@echo

HELP += $(call help_section, Project)
