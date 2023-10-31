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
        Schema::create('patient', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->dateTime('creation_date');
            $table->string('phone_number', 15);
            $table->unsignedBigInteger('created_by');
            
            $table->foreign('created_by')->references('id')->on('employees');

            $table->timestamps();
        });

        Schema::create('patient_history', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('patient_id');
            $table->unsignedBigInteger('employee_id'); // Employee who performed the procedure
            $table->text('procedure_description');
            $table->dateTime('procedure_date');
            $table->unsignedBigInteger('schedule_id'); // Reference to the scheduled time

            $table->foreign('patient_id')->references('id')->on('patients');
            $table->foreign('employee_id')->references('id')->on('employees');
            
            // Create a foreign key to link the schedule_id to the schedules table
            $table->foreign('schedule_id')->references('id')->on('schedule');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patient_history');
        Schema::dropIfExists('patient');
    }
};
