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
        Schema::create('schedules', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('curve_id')->nullable(); // Nullable curve ID
            $table->string('day'); // Day of the week (e.g., Monday, Tuesday)
            $table->string('time_slot'); // Time slot (e.g., "9:00 - 10:00")
            $table->boolean('isReserved')->default(false); // Is the slot reserved (true/false)
            $table->unsignedBigInteger('patient_id')->nullable(); // Nullable patient ID

            // Foreign key constraints
            $table->foreign('patient_id')->references('id')->on('patients');
            $table->foreign('curve_id')->references('id')->on('curve')->nullable(); // Create a foreign key to link with the curve table

            $table->timestamps(); // Created at and Updated at timestamps
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schedules');
    }
};

