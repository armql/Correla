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
            "label"=> $data["label"],
            "value"=> $data["value"],
            "description"=> $data["description"],
            "canPerform"=> $data["canPerform"],
            "type"=> $data["type"],
            "demandResources"=> $data["demandResources"],
            'created_by' => $data['created_by'],

            "creation_date"=> $currentTimeStamp,
        ]);


        return response([
            'status' => 'success',
            'message' => 'Procedure created successfully',
            'procedure' => $procedure,
        ]);
    }
}
