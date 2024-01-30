<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Futbolcu;

class FutbolcuController extends Controller
{
    public function index()
    {
        $futbolcular = Futbolcu::all();
        return response()->json($futbolcular);
    }

    public function show($id)
    {
        $futbolcu = Futbolcu::find($id);

        if (!$futbolcu) {
            return response()->json(['message' => 'Futbolcu bulunamadı'], 404);
        }

        return response()->json($futbolcu);
    }

    public function store(Request $request)
    {
        $request->validate([
            'isim' => 'required',
            'soyisim' => 'required',
            'mevki' => 'required',
            'takim' => 'required',
        ]);

        $futbolcu = Futbolcu::create($request->all());

        return response()->json($futbolcu, 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'isim' => 'required',
            'soyisim' => 'required',
            'mevki' => 'required',
            'takim' => 'required',
        ]);

        $futbolcu = Futbolcu::find($id);

        if (!$futbolcu) {
            return response()->json(['message' => 'Futbolcu bulunamadı'], 404);
        }

        $futbolcu->update($request->all());

        return response()->json($futbolcu);
    }


    public function destroy($id)
    {
        $futbolcu = Futbolcu::find($id);

        if (!$futbolcu) {
            return response()->json(['message' => 'Futbolcu bulunamadı'], 404);
        }

        $futbolcu->delete();

        return response()->json(['message' => 'Futbolcu silindi']);
    }
}
