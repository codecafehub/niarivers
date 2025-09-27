<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;


class CheckPaymentStatus
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response // <-- THIS LINE IS NOW CORRECT
    {
        if (Auth::check()) {
            
            /** @var \App\Models\User $user */
            $user = Auth::user();

            if ($user->payment_status === 'pending') {
                
                // This logic is perfect
                if (!$request->routeIs('payment.show') && !$request->routeIs('logout')) {
                    return redirect()->route('payment.show');
                }
            }
        }
        
        return $next($request);
    }
}