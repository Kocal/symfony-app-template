module.exports = {
  '*.php': [
    'symfony php bin/php-cs-fixer.phar fix --diff --config .php_cs.dist --no-ansi',
    'symfony php bin/phpcs --no-colors',
    'symfony php bin/phpstan.phar analyse --no-ansi --no-progress',
  ],
  '*.{js,jsx,ts,tsx,vue}': ['eslint --fix'],
  '*.{json,yml,yaml,md}': ['prettier --write'],
};
