<?php

declare(strict_types=1);

$finder = PhpCsFixer\Finder::create()
    ->in([__DIR__.'/src'])
    ->exclude(['Tests', 'Migrations'])
;

return (new PhpCsFixer\Config())
    ->setRiskyAllowed(true)
    ->setRules([
        '@Symfony'               => true,
        'binary_operator_spaces' => [
            'operators' => [
                '=>' => 'align_single_space_minimal',
                '='  => 'align_single_space_minimal',
            ],
        ],
        'no_unreachable_default_argument_value' => false,
        'braces'                                => [
            'allow_single_line_closure' => true,
        ],
        'heredoc_to_nowdoc'    => false,
        'phpdoc_summary'       => false,
        'declare_strict_types' => true,
    ])
    ->setFinder($finder)
;
