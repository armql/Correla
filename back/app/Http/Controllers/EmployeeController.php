<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignupRequest;
use App\Models\Employee;
use App\Models\User;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function create(SignupRequest $request) 
    {
        $data = $request ->validated();

        $currentTimeStamp = now();

        $employee = Employee::create([
            "name"=> $data["name"],
            "creation_date"=> $currentTimeStamp,
        ]);

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'employee_id' => $employee->id,
        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response([
        'user' => $user,
        'token' => $token
        ]);
    }

    public function display(Request $request)
    {
        $perPage = $request->input('perPage', 10);

        $employee = User::paginate($perPage);

        $currentPage = $request->input('page', 1);

        return response()->json([
            'employees' => $employee->items(),
            'current_page' => $currentPage,
            'total' => $employee->total(),
            'per_page' => $employee->perPage(),
            'last_page' => $employee->lastPage(),
        ]);
    }

    /**
     * Retrieve a specific user for editing.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function find($id)
    {
        $employee = User::find($id);

        if (!$employee) {
            return response()->json([
                'status' => 'error',
                'message' => 'No user found'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'employee' => $employee
        ]);
    }

    /**
     * Update an existing user.
     *
     * @param  \App\Http\Requests\SignupRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(SignupRequest $request, int $id)
    {
        $data = $request->validated();

        $employee = User::find($id);

        if (!$employee) {
            return response()->json([
                'status' => 'error',
                'message' => 'No user found'
            ], 404);
        }

        $user = User::find($data['created_by']);
        if (!$user) {
            return response()->json([
                'status' => 'error',
                'message' => 'No user found'
            ], 404);
        }

        $employee->update([
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
            'message' => 'Employee updated successfully',
            'employee' => $employee
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
        $employee = User::find($id);

        if (!$employee) {
            return response()->json([
                'status'=> 404,
                'message'=> 'No user found'
            ],404);
        }

        $employee->delete();

        return response()->json([
            'status'=> 200,
            'message'=> 'Employee deleted successfully',
        ],200);
     }
}
