<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('checkups', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('phone_number', 15);
            $table->unsignedBigInteger('procedure_id');
            $table->string('unique_id')->unique();
            $table->timestamps();
        });

        // Add foreign key constraint for the procedure_id
        Schema::table('checkups', function (Blueprint $table) {
            $table->foreign('procedure_id')->references('id')->on('procedures');
        });
    }

    public function down()
    {
        Schema::dropIfExists('checkups');
    }
};
