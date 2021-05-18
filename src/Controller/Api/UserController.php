<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    /**
     * @Route("/api/me", name="api_me", methods={"GET"})
     */
    public function me(): JsonResponse
    {
        $user = $this->getUser();
        if (!$user instanceof User) {
            throw new \RuntimeException('Unable to fetch current user.');
        }

        return new JsonResponse([
            'roles'  => $user->getRoles(),
            'email'  => $user->getEmail(),
        ]);
    }
}
