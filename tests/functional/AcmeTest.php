<?php

declare(strict_types=1);

namespace App\Tests\functional;

use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class AcmeTest extends KernelTestCase
{
    public function testAcme()
    {
        self::bootKernel();

        $this->assertTrue(static::$container->has('router'));
    }
}
