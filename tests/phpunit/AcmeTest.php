<?php

declare(strict_types=1);

namespace App\Tests;

use PHPUnit\Framework\TestCase;

class AcmeTest extends TestCase
{
    public function testAcme(): void
    {
        static::assertEquals(2, 1 + 1);
    }
}
