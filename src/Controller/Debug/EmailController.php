<?php

declare(strict_types=1);

namespace App\Controller\Debug;

use Symfony\Bridge\Twig\Mime\BodyRenderer;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment as Twig;

/**
 * @Route("/email")
 */
class EmailController extends AbstractController
{
    /**
     * @Route("/basic")
     */
    public function basic(Request $request, MailerInterface $mailer, Twig $twig): Response
    {
        $email = (new TemplatedEmail())
            ->from('john@smith.me')
            ->to('user@example.com')
            ->subject('Basic email')
            ->htmlTemplate('debug/email/basic.html.twig');

        if ($request->query->has('send')) {
            $mailer->send($email);

            return new Response('Email sent.');
        }

        $renderer = new BodyRenderer($twig);
        $renderer->render($email);

        return new Response((string) $email->getHtmlBody());
    }
}
