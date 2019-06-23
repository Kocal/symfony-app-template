<?php

declare(strict_types=1);

namespace App\Controller\Debug;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DebugRequestController extends AbstractController
{
    /**
     * @Route("/request", name="debug_request")
     */
    public function debugRequest(Request $request)
    {
        return $this->render('debug/request.html.twig');
    }
}
