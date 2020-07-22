<?php

namespace App\Http\Controllers;

use App\Menu;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class MenuController extends Controller
{
    public function getMenu() {
        
        $menu = DB::table('menu')->get();

        return response()->json(compact('menu'));
    }
}
