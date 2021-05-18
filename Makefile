-include .manala/Makefile

# This function will be called at the end of "make setup"
define setup
    $(MAKE) install-app
    $(MAKE) init-db@test
endef

# This function will be called at the end of "make setup@integration"
define setup_integration
    $(MAKE) install-app@integration
endef

###########
# Install #
###########

## Install application
install-app: composer-install init-db
install-app:
	$(symfony) console cache:clear
	yarn install
	yarn dev

## Install application in integration environment
install-app@integration: export APP_ENV=test
install-app@integration:
	$(composer) install --ansi --no-interaction --no-progress --prefer-dist --optimize-autoloader
	yarn install --color=always --no-progress --frozen-lockfile
	yarn dev
	$(MAKE) init-db@integration

################
# Common tasks #
################

composer-install:
	$(composer) install --ansi --no-interaction

init-db:
	$(symfony) console doctrine:database:drop --force --if-exists --no-interaction
	$(symfony) console doctrine:database:create --no-interaction
	$(symfony) console doctrine:schema:update --force --no-interaction # to remove when we will use migrations
	# $(symfony) console doctrine:migrations:migrate --no-interaction
	$(symfony) console hautelook:fixtures:load --no-interaction

init-db@test: export APP_ENV=test
init-db@test: init-db

init-db@integration: export APP_ENV=test
init-db@integration:
	$(symfony) console doctrine:database:drop --force --if-exists --no-interaction
	$(symfony) console doctrine:database:create --no-interaction
	$(symfony) console doctrine:schema:update --force --no-interaction # to remove when we will use migrations
	# $(symfony) console doctrine:migrations:migrate --no-interaction
	$(symfony) console hautelook:fixtures:load --no-interaction

reload-db@test: export APP_ENV=test
reload-db@test:
	$(symfony) console hautelook:fixtures:load --purge-with-truncate --no-interaction
