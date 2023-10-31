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
        Schema::create('employee', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Employee Name
            $table->dateTime('creation_date'); // Creation Date
            $table->unsignedBigInteger('created_by')->nullable(); // Employee ID of the creator

            // Foreign key constraint to ensure created_by references a valid employee
            $table->foreign('created_by')->references('id')->on('employees');

            $table->timestamps(); // Created at and Updated at timestamps
        });

        Schema::create('employee_roles', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Role or Specialty Name (e.g., Orthodontist, Oral Surgeon)
            $table->timestamps(); // Created at and Updated at timestamps
        });

        // Pivot table to represent the many-to-many relationship between employees and their roles
        Schema::create('employee_employee_role', function (Blueprint $table) {
            $table->unsignedBigInteger('employee_id');
            $table->unsignedBigInteger('employee_role_id');

            // Foreign key constraints to link employee and role IDs
            $table->foreign('employee_id')->references('id')->on('employees');
            $table->foreign('employee_role_id')->references('id')->on('employee_roles');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employee_employee_role');
        Schema::dropIfExists('employee_roles');
        Schema::dropIfExists('employee');
    }
};
