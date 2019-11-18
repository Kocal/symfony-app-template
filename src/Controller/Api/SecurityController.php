<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{
    /**
     * @Route("/api/login", name="api_login", methods={"POST"})
     */
    public function login(): JsonResponse
    {
        $user = $this->getUser();
        if (!$user instanceof User) {
            throw new \RuntimeException('Unable to fetch current user.');
        }

        return new JsonResponse([
            'apiKey' => $user->getApiKey(),
            'roles'  => $user->getRoles(),
            'email'  => $user->getEmail(),
        ]);
    }
}
