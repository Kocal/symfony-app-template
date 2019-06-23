<?php

declare(strict_types=1);

namespace App\EventListener;

use Symfony\Component\HttpKernel\Event\RequestEvent;

class JsonRequestDecoderListener
{
    public function onKernelRequest(RequestEvent $event): void
    {
        $request = $event->getRequest();

        if ('json' === $request->getContentType()) {
            $data = json_decode($request->getContent(), true);

            if (\JSON_ERROR_NONE === json_last_error()) {
                $request->request->replace($data);
            }
        }
    }
}
