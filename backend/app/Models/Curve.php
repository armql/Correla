<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Curve extends Model
{
    use HasFactory;

    protected $fillable = ['patient_id', 'curve_number', 'is_reserved', 'employee_id'];

    public function schedules()
    {
        return $this->hasMany(Schedule::class);
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employee_id');
    }
}
