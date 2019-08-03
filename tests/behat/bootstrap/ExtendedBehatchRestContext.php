<?php

declare(strict_types=1);

namespace App\Tests\Behat;

use Behatch\Context\RestContext;

class ExtendedBehatchRestContext extends RestContext
{
    /**
     * @When /^I follow the redirection$/
     * @Then /^I should be redirected$/
     */
    public function iFollowTheRedirection()
    {
        $client = $this->getSession()->getDriver()->getClient();
        $client->followRedirects(true);
        $client->followRedirect();
    }
}
