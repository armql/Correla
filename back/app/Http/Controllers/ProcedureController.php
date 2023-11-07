<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProcedureRequest;
use App\Models\Procedure;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    public function display(Request $request)
    {
        $perPage = $request->input('perPage', 10);

        $procedures = Procedure::paginate($perPage);

        $currentPage = $request->input('page', 1);

        return response()->json([
            'procedures' => $procedures->items(),
            'current_page' => $currentPage,
            'total' => $procedures->total(),
            'per_page' => $procedures->perPage(),
            'last_page' => $procedures->lastPage(),
        ]);
    }

    /**
     * Retrieve a specific procedure for editing.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function find($id)
    {
        $procedure = Procedure::find($id);

        if (!$procedure) {
            return response()->json([
                'status' => 'error',
                'message' => 'No procedure found'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'procedure' => $procedure
        ]);
    }

    /**
     * Update an existing procedure.
     *
     * @param  \App\Http\Requests\ProcedureRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProcedureRequest $request, int $id)
    {
        $data = $request->validated();

        $procedure = Procedure::find($id);

        if (!$procedure) {
            return response()->json([
                'status' => 'error',
                'message' => 'No procedure found'
            ], 404);
        }

        $user = User::find($data['created_by']);
        if (!$user) {
            return response()->json([
                'status' => 'error',
                'message' => 'No user found'
            ], 404);
        }

        $procedure->update([
            'label' => $data['label'],
            'description' => $data['description'],
            'value' => $data['value'],
            'type' => $data['type'],
            'canPerform' => $data['canPerform'],
            'demandResources' => $data['demandResources'],
            'created_by' => $data['created_by'],
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Procedure updated successfully',
            'procedure' => $procedure
        ]);
    }


    /**
     * Get the name of a user based on their ID.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function creator(int $id)
    {
        $user = DB::table('users')->select('name')->where('id', $id)->first();

        if (!$user) {
            return response()->json([
                'status' => 'error',
                'message' => 'User not found'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'name' => $user->name
        ]);
    }

     /**
     * Delete a specific .
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

     public function destroy($id)
     {
        $procedure = Procedure::find($id);

        if (!$procedure) {
            return response()->json([
                'status'=> 404,
                'message'=> 'No procedure found'
            ],404);
        }

        $procedure->delete();

        return response()->json([
            'status'=> 200,
            'message'=> 'Procedure deleted successfully',
        ],200);
     }

}
