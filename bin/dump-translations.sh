#!/usr/bin/env bash

# This script allow our translations to be dumped properly in folder "assets/_generated/translations",
# either we are in CI (with APP_ENV=test), in local (no APP_ENV), or production (no APP_ENV neither).
# Since we disable the Symfony Translator for test environment, translations won't be dumped and building javascript assets fails.
# To fix this, if we have APP_ENV == test, then we run the command in dev env to be sure translations are dumped.

if [ "$APP_ENV" == 'test' ]; then
  echo "APP_ENV=test detected, translations will be dumped for APP_ENV=dev instead."
  APP_ENV=dev bin/console bazinga:js-translation:dump assets/_generated --merge-domains
else
  bin/console bazinga:js-translation:dump assets/_generated --merge-domains
fi
