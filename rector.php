<?php

declare(strict_types=1);

use Rector\Core\Configuration\Option;
use Rector\Doctrine\Set\DoctrineSetList;
use Rector\PHPUnit\Set\PHPUnitSetList;
use Rector\Set\ValueObject\SetList;
use Rector\Symfony\Set\SymfonySetList;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function (ContainerConfigurator $containerConfigurator): void {
    // get parameters
    $parameters = $containerConfigurator->parameters();
    $parameters->set(Option::PATHS, [__DIR__.'/src', __DIR__.'/tests']);
    $parameters->set(Option::SKIP, [
        \Rector\CodingStyle\Rector\ClassConst\VarConstantCommentRector::class => [
            __DIR__.'/src/ValueObject/Routing/RouteName.php',
        ],
    ]);
    $parameters->set(Option::AUTO_IMPORT_NAMES, true);

    // Define what rule sets will be applied
    $containerConfigurator->import(SetList::PHP_80);
    $containerConfigurator->import(SetList::DEAD_CODE);
    $containerConfigurator->import(SetList::CODE_QUALITY);
    $containerConfigurator->import(SetList::CODE_QUALITY_STRICT);
    $containerConfigurator->import(SetList::CODING_STYLE);

    // get services (needed for register a single rule)
    // $services = $containerConfigurator->services();

    // register a single rule
    // $services->set(TypedPropertyRector::class);

    // Symfony
    $containerConfigurator->import(SymfonySetList::SYMFONY_52);
    $containerConfigurator->import(SymfonySetList::SYMFONY_CODE_QUALITY);
    $parameters->set(
        Option::SYMFONY_CONTAINER_XML_PATH_PARAMETER,
        __DIR__.'/var/cache/dev/App_KernelDevDebugContainer.xml'
    );

    // Doctrine
    $containerConfigurator->import(DoctrineSetList::DOCTRINE_CODE_QUALITY);

    // PHPUnit
    $containerConfigurator->import(PHPUnitSetList::PHPUNIT_90);
    $containerConfigurator->import(PHPUnitSetList::PHPUNIT_CODE_QUALITY);
    $containerConfigurator->import(PHPUnitSetList::PHPUNIT_EXCEPTION);
    $containerConfigurator->import(PHPUnitSetList::PHPUNIT_MOCK);
    $containerConfigurator->import(PHPUnitSetList::PHPUNIT_SPECIFIC_METHOD);
    $containerConfigurator->import(PHPUnitSetList::PHPUNIT_YIELD_DATA_PROVIDER);
};
