<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProcedureRequest;
use App\Models\Procedure;
use Illuminate\Http\Request;

class ProcedureController extends Controller
{
    public function create(ProcedureRequest $request) 
    {
        $data = $request ->validated();

        $currentTimeStamp = now();

        /** @var \App\Models\Procedure $procedure */
        $procedure = Procedure::create([
            "name"=> $data["name"],
            "value"=> $data["value"],
            "canPerform"=> $data["canPerform"],
            "type"=> $data["type"],
            "demandResources"=> $data["demandResources"],
            'user_id' => $data['user_id'],

            "creation_date"=> $currentTimeStamp,
        ]);


        return response([
            'status' => 'success',
            'message' => 'Procedure created successfully',
            'procedure' => $procedure,
        ]);
    }
}
