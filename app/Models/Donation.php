<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    protected $fillable = [
        'user_id',
        'donor_name',
        'donor_email',
        'amount',
        'status',
    ];
}
