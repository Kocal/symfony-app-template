<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\User;
use App\ValueObject\Routing\RouteName;
use RuntimeException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    #[Route(path: '/api/me', name: RouteName::API_ME, methods: ['GET'])]
    public function me(): JsonResponse
    {
        $user = $this->getUser();
        if (!$user instanceof User) {
            throw new RuntimeException('Unable to fetch current user.');
        }

        return new JsonResponse([
            'roles' => $user->getRoles(),
            'email' => $user->getEmail(),
        ]);
    }
}
