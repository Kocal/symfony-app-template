<?php

declare(strict_types=1);

namespace App\ValueObject\Routing;

/**
 * @noRector \Rector\CodingStyle\Rector\ClassConst\VarConstantCommentRector
 *
 * @see https://getrector.org/blog/2021/01/11/switch-symfony-string-route-names-to-constants
 */
final class RouteName
{
    public const HOME       = 'home';
    public const APP_LOGIN  = 'app_login';
    public const APP_LOGOUT = 'app_logout';

    // Api
    public const API_ME = 'api_me';

    // Debug
    public const DEBUG_REQUEST = 'debug_request';
}
