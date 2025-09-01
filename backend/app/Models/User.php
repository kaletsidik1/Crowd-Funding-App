<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasUuids, HasApiTokens, Notifiable;

    protected $primaryKey = 'user_id';
    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'email',
        'password_hash',
        'full_name',
        'roles',
    ];

    protected $hidden = [
        'password_hash',
        'remember_token',
    ];

    protected $casts = [
        'roles' => 'array',
        'email_verified_at' => 'datetime',
    ];

    // Relationships
    public function campaigns()
    {
        return $this->hasMany(Campaign::class, 'creator_id');
    }

    public function contributions()
    {
        return $this->hasMany(Contribution::class, 'backer_id');
    }
}
