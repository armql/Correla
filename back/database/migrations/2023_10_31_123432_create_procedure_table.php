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
        Schema::create('procedure', function (Blueprint $table) {
            $table->id();
            $table->string('type'); // Type of Procedure (e.g., Oral Surgery, Preventive Dentistry)
            $table->string('value')->unique(); // Unique value identifier for the procedure
            $table->string('label'); // Label or Display Name (e.g., Dental Implant)
            $table->text('description'); // Description of the procedure
            $table->string('canPerform'); // Employee specialty that can perform this procedure
            $table->boolean('demandsResources'); // Indicates if the procedure demands resources

            $table->dateTime('creation_date');
            $table->unsignedBigInteger('created_by');

            // Foreign key constraint to link the creator to an employee
            $table->foreign('created_by')->references('id')->on('employees');

            $table->timestamps(); // Created at and Updated at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('procedure');
    }
};
