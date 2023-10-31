<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;

    protected $fillable = ['curve_id', 'day', 'time_slot', 'isReserved', 'patient_id'];

    public function curve()
    {
        return $this->belongsTo(Curve::class, 'curve_id');
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }
}
