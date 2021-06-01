<?php

declare(strict_types=1);

namespace App\Controller;

use App\Repository\UserRepository;
use App\ValueObject\Routing\RouteName;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route(path: '/', name: RouteName::HOME)]
    public function index(UserRepository $userRepository): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'users'           => $userRepository->findAll(),
        ]);
    }
}
