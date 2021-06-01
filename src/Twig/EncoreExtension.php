<?php

declare(strict_types=1);

namespace App\Twig;

use RuntimeException;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class EncoreExtension extends AbstractExtension
{
    public function __construct(private string $publicDir)
    {
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('encore_source', fn (string $path): string => $this->source($path)),
        ];
    }

    public function source(string $path): string
    {
        if (str_starts_with($path, '/')) {
            $path = $this->publicDir.$path;
        }

        if (false !== $content = file_get_contents($path)) {
            return $content;
        }

        throw new RuntimeException(sprintf('Unable to read file "%s".', $path));
    }
}
