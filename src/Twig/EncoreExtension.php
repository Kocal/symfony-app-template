<?php

declare(strict_types=1);

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class EncoreExtension extends AbstractExtension
{
    private $publicDir;

    public function __construct(string $publicDir)
    {
        $this->publicDir = $publicDir;
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('encore_source', [$this, 'source']),
        ];
    }

    public function source(string $path): string
    {
        if (0 === strpos($path, '/')) {
            $path = $this->publicDir.$path;
        }

        if (false !== $content = file_get_contents($path)) {
            return $content;
        }

        throw new \RuntimeException("Unable to read file \"$path\".");
    }
}
