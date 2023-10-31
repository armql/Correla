<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Procedure extends Model
{
    use HasFactory;

    protected $fillable = ['type', 'value', 'label', 'description', 'canPerform', 'demandsResources', 'creation_date', 'created_by'];

    public function createdByEmployee()
    {
        return $this->belongsTo(Employee::class, 'created_by');
    }
}

