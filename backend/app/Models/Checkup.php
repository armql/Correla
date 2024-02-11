<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Checkup extends Model
{
    use HasFactory;

    protected $fillable = ['first_name', 'last_name', 'phone_number', 'procedure_id', 'unique_id'];

    public function procedure()
    {
        return $this->belongsTo(Procedure::class);
    }
}
