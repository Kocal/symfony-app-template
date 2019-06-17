<?php

declare(strict_types=1);

namespace App\Fixtures\Faker\Provider;

use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class PasswordProvider
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function encodePassword(User $user, string $wordToEncode)
    {
        return $this->passwordEncoder->encodePassword($user, $wordToEncode);
    }
}
