<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Futbolcu extends Model
{
    use HasFactory;

    protected $table = 'futbolcular'; 
    protected $fillable = ['isim', 'soyisim', 'mevki', 'takim'];
}
