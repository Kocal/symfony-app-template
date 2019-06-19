<?php

namespace App\Controller\Api;

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

        return new JsonResponse([
            'apiKey' => $user->getApiKey(),
            'roles'  => $user->getRoles(),
            'email'  => $user->getEmail(),
        ]);
    }
}
