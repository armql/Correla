<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('reservation', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('phone_number', 15);
            $table->unsignedBigInteger('procedure_id');
            $table->unsignedBigInteger('employee_id');
            $table->string('unique_id')->unique();
            $table->timestamps();
        });

        // Add foreign key constraints for procedure_id and employee_id
        Schema::table('reservation', function (Blueprint $table) {
            $table->foreign('procedure_id')->references('id')->on('procedures');
            $table->foreign('employee_id')->references('id')->on('employees');
        });
    }

    public function down()
    {
        Schema::dropIfExists('reservation');
    }
};

