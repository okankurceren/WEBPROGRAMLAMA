<?php

use App\Http\Controllers\FutbolcuController;
use Illuminate\Support\Facades\Route;


Route::get('/futbolcular', [FutbolcuController::class, 'index']);
Route::get('/futbolcular/{id}', [FutbolcuController::class, 'show']);
Route::post('/futbolcular', [FutbolcuController::class, 'store']);
Route::put('/futbolcular/{id}', [FutbolcuController::class, 'update']);
Route::delete('/futbolcular/{id}', [FutbolcuController::class, 'destroy']);

