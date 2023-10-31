<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'creation_date', 'created_by'];

    public function created_by_employee()
    {
        return $this->belongsTo(Employee::class, 'created_by');
    }

    public function roles()
    {
        return $this->belongsToMany(EmployeeRole::class, 'employee_employee_role', 'employee_id', 'employee_role_id');
    }

    public function reserves()
    {
        return $this->hasMany(Reservation::class, 'employee_id');
    }

    public function curves()
    {
        return $this->hasMany(Curve::class, 'employee_id');
    }
}
