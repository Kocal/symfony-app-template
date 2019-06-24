<?php

namespace phpspec\App;

use App\Acme;
use PhpSpec\ObjectBehavior;

class AcmeSpec extends ObjectBehavior
{
    public function it_is_initializable()
    {
        $this->shouldHaveType(Acme::class);
    }
}
