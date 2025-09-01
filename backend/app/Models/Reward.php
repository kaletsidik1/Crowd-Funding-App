<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Reward extends Model
{
    use HasUuids;

    protected $primaryKey = 'reward_id';
    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'campaign_id',
        'title',
        'description',
        'minimum_contribution_amount',
        'quantity_available',
        'delivery_date',
    ];

    protected $casts = [
        'delivery_date' => 'date',
        'minimum_contribution_amount' => 'decimal:2',
    ];

    // Relationships
    public function campaign()
    {
        return $this->belongsTo(Campaign::class);
    }

    public function contributions()
    {
        return $this->hasMany(Contribution::class);
    }
}
