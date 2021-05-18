module.exports = {
  '*.php': [
    'symfony php bin/php-cs-fixer fix --diff --config .php-cs-fixer.dist.php --no-ansi',
    'symfony php bin/phpcs --no-colors',
    'symfony php bin/phpstan analyse --no-ansi --no-progress',
  ],
  '*.{js,jsx,ts,tsx,vue}': ['eslint --fix'],
  '*.{json,yml,yaml,md}': ['prettier --write'],
};
