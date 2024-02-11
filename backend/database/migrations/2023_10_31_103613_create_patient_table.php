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
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->dateTime('creation_date');
            $table->string('phone_number', 15);
            $table->unsignedBigInteger('created_by');

            $table->foreign('created_by')->references('id')->on('employees');

            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patient_history');
        Schema::dropIfExists('patients');
    }
};
