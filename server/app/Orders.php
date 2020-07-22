<?php

namespace App;
use Illuminate\Notifications\Notifiable;

class Orders 
{
    use Notifiable;

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'details', 'created', 'total', 'address', 'contact'
    ];
}
