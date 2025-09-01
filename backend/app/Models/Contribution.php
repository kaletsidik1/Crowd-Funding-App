<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Contribution extends Model
{
    use HasUuids;

    protected $primaryKey = 'contribution_id';
    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'backer_id',
        'campaign_id',
        'reward_id',
        'amount',
        'payment_status',
        'contribution_date',
    ];

    protected $casts = [
        'amount' => 'decimal:2',
        'contribution_date' => 'datetime',
    ];

    // Relationships
    public function backer()
    {
        return $this->belongsTo(User::class, 'backer_id');
    }

    public function campaign()
    {
        return $this->belongsTo(Campaign::class);
    }

    public function reward()
    {
        return $this->belongsTo(Reward::class);
    }
}
