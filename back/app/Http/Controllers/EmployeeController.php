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
}
