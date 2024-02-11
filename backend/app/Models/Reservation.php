<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = ['first_name', 'last_name', 'phone_number', 'procedure_id', 'employee_id', 'unique_id'];

    public function procedure()
    {
        return $this->belongsTo(Procedure::class);
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}
