<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProcedureController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);

Route::post('/createprocedure', [ProcedureController::class, 'create']);
Route::get('/procedures', [ProcedureController::class, 'display'])->name('procedures')->middleware('web');
Route::get('/users/{id}/name', [ProcedureController::class, 'creator']);
Route::get('procedure/{id}', [ProcedureController::class, 'find']);
Route::put('procedure/{id}/edit', [ProcedureController::class, 'update']);
Route::delete('procedure/{id}/delete', [ProcedureController::class, 'destroy']);
