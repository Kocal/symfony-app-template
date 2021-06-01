<?php

declare(strict_types=1);

namespace Fixtures\Faker\Provider;

use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class PasswordProvider
{
    public function __construct(private UserPasswordHasherInterface $passwordHasher)
    {
    }

    public function encodePassword(User $user, string $wordToEncode): string
    {
        return $this->passwordHasher->hashPassword($user, $wordToEncode);
    }
}
