<?php

namespace App;
use Illuminate\Notifications\Notifiable;

class Menu 
{
    use Notifiable;

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'price', 'image', 'ingredients'
    ];
}
