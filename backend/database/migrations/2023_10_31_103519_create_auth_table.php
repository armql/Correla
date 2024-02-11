<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Employee Name
            $table->string('email')->unique(); // Employee Email (used for login)
            $table->string('password'); // Password (hashed)
            $table->rememberToken(); // For "remember me" functionality
            $table->unsignedBigInteger('employee_id'); // Reference to the employee

            // Foreign key constraint to link user to employee
            $table->foreign('employee_id')->references('id')->on('employees');

            $table->timestamps(); // Created at and Updated at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
