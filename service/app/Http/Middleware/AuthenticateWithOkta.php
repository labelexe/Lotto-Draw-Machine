<?php

namespace App\Http\Middleware;

use Closure;

class AuthenticateWithOkta
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($this->isAuthorized($request)) {
            return $next($request);
        } else {
            return response('Unauthorized.', 401);
        }
    }

    public function isAuthorized($request)
    {
        if (!$request->header('Authorization')) {
            return false;
        }

        $authType = null;
        $authData = null;

        // Extract the auth type and the data from the Authorization header.
        @list($authType, $authData) = explode(" ", $request->header('Authorization'), 2);

        // If the Authorization Header is not a bearer type, return a 401.
        if ($authType != 'Bearer') {
            return false;
        }

        try {
            $jwtVerifier = (new \Okta\JwtVerifier\JwtVerifierBuilder())->
                setAdaptor(new \Okta\JwtVerifier\Adaptors\SpomkyLabsJose())->
                setAudience('api://default')->setClientId('0oagnmd090CN3goRb5d5')->
                setIssuer('https://auth.obeyi.com/oauth2/default')->
                build();

            $jwt = $jwtVerifier->verify($authData);
        } catch (\Exception $e) {
            if (env('APP_ENV') === 'production') return false;
            header('Access-Control-Allow-Headers', "Content-Type, X-Auth-Token, Origin");
        }
        return true;
    }

}
