<?php

/**
 * This file is used by PHPStan, see https://github.com/phpstan/phpstan-doctrine#configuration
 */

declare(strict_types=1);
use App\Kernel;
use Doctrine\ORM\EntityManager;
use Symfony\Component\Dotenv\Dotenv;

require dirname(__DIR__).'/vendor/autoload.php';

(new Dotenv())->bootEnv(dirname(__DIR__).'/.env');

$kernel = new Kernel($_SERVER['APP_ENV'], (bool) $_SERVER['APP_DEBUG']);
$kernel->boot();

/** @var EntityManager $entityManager */
$entityManager = $kernel->getContainer()->get('doctrine')->getManager();

return $entityManager;
