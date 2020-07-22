<?php

namespace App\Http\Controllers;

use App\Orders;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class OrdersController extends Controller
{
    public function getOrders(Request $request) {

        $userId = $request['userId'];
        
        $orders = DB::table('orders')->where("user_id", $userId)->get();

        // return response()->json(compact('orders'));
        return $orders;
    }

    public function createOrder(Request $request) {

        DB::table('orders')->insert([
            'user_id' => $request['userId'], 'details' => $request['details'], 'note' => $request['note'], 'created' => $request['created']
        ]);

        return response()->json(['order_successful'], 200);
    }
}
