<?php

declare(strict_types=1);

return [
    Symfony\Bundle\FrameworkBundle\FrameworkBundle::class                      => ['all' => true],
    Sensio\Bundle\FrameworkExtraBundle\SensioFrameworkExtraBundle::class       => ['all' => true],
    Symfony\Bundle\SecurityBundle\SecurityBundle::class                        => ['all' => true],
    Symfony\Bundle\TwigBundle\TwigBundle::class                                => ['all' => true],
    Symfony\Bundle\WebProfilerBundle\WebProfilerBundle::class                  => ['dev' => true, 'test' => true],
    Symfony\Bundle\MonologBundle\MonologBundle::class                          => ['all' => true],
    Symfony\Bundle\DebugBundle\DebugBundle::class                              => ['dev' => true, 'test' => true],
    Symfony\Bundle\MakerBundle\MakerBundle::class                              => ['dev' => true],
    Symfony\WebpackEncoreBundle\WebpackEncoreBundle::class                     => ['all' => true],
    Doctrine\Bundle\DoctrineBundle\DoctrineBundle::class                       => ['all' => true],
    Doctrine\Bundle\MigrationsBundle\DoctrineMigrationsBundle::class           => ['all' => true],
    Nelmio\Alice\Bridge\Symfony\NelmioAliceBundle::class                       => ['dev' => true, 'test' => true],
    Fidry\AliceDataFixtures\Bridge\Symfony\FidryAliceDataFixturesBundle::class => ['dev' => true, 'test' => true],
    Hautelook\AliceBundle\HautelookAliceBundle::class                          => ['dev' => true, 'test' => true],
    Nelmio\CorsBundle\NelmioCorsBundle::class                                  => ['all' => true],
    ApiPlatform\Core\Bridge\Symfony\Bundle\ApiPlatformBundle::class            => ['all' => true],
    Snc\RedisBundle\SncRedisBundle::class                                      => ['all' => true],
    Knp\Bundle\TimeBundle\KnpTimeBundle::class                                 => ['all' => true],
    Twig\Extra\TwigExtraBundle\TwigExtraBundle::class                          => ['all' => true],
    Knp\DoctrineBehaviors\DoctrineBehaviorsBundle::class                       => ['all' => true],
    Translation\Bundle\TranslationBundle::class                                => ['all' => true, 'test' => false],
    FOS\JsRoutingBundle\FOSJsRoutingBundle::class                              => ['all' => true],
    Bazinga\Bundle\JsTranslationBundle\BazingaJsTranslationBundle::class       => ['all' => true],
    Sentry\SentryBundle\SentryBundle::class                                    => ['all' => true],
];
