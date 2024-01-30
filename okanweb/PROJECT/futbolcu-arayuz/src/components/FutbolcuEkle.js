import React, { useState } from 'react';
import './FutbolcuEkle.css';

const FutbolcuEkle = ({ onEkle }) => {
  const [isim, setIsim] = useState('');
  const [soyisim, setSoyisim] = useState('');
  const [mevki, setMevki] = useState('');
  const [takim, setTakim] = useState('');

  const handleEkle = () => {
    const yeniFutbolcu = {
      isim,
      soyisim,
      mevki,
      takim,
    };

    onEkle(yeniFutbolcu);

    // Formu sıfırla
    setIsim('');
    setSoyisim('');
    setMevki('');
    setTakim('');
  };

  return (
    <div className="futbolcu-ekle-container">
      <h2>Futbolcu Ekle</h2>
      <div className="input-group">
        <label>İsim:</label>
        <input type="text" value={isim} onChange={(e) => setIsim(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Soyisim:</label>
        <input type="text" value={soyisim} onChange={(e) => setSoyisim(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Mevki:</label>
        <input type="text" value={mevki} onChange={(e) => setMevki(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Takım:</label>
        <input type="text" value={takim} onChange={(e) => setTakim(e.target.value)} />
      </div>
      <button className="ekle-btn" onClick={handleEkle}>
        Ekle
      </button>
    </div>
  );
};

export default FutbolcuEkle;
