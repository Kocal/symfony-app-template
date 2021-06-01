<?php

declare(strict_types=1);

namespace App\Controller\Debug;

use App\ValueObject\Routing\RouteName;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DebugRequestController extends AbstractController
{
    #[Route(path: '/request', name: RouteName::DEBUG_REQUEST)]
    public function debugRequest(Request $request): Response
    {
        return $this->render('debug/request.html.twig');
    }
}
