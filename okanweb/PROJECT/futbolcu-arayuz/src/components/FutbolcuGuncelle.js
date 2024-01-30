import React, { useState } from 'react';
import './FutbolcuGuncelle.css';

const FutbolcuGuncelle = ({ futbolcu, onUpdate }) => {
  const [updatedFutbolcu, setUpdatedFutbolcu] = useState({ ...futbolcu });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFutbolcu((prevFutbolcu) => ({ ...prevFutbolcu, [name]: value }));
  };

  const handleUpdate = () => {
    onUpdate(updatedFutbolcu);
  };

  return (
    <div className="futbolcu-guncelle-container">
      <h2>Güncelle</h2>
      <div className="input-group">
        <label>İsim:</label>
        <input type="text" name="isim" value={updatedFutbolcu.isim} onChange={handleChange} />
      </div>
      <div className="input-group">
        <label>Soyisim:</label>
        <input type="text" name="soyisim" value={updatedFutbolcu.soyisim} onChange={handleChange} />
      </div>
      <div className="input-group">
        <label>Mevki:</label>
        <input type="text" name="mevki" value={updatedFutbolcu.mevki} onChange={handleChange} />
      </div>
      <div className="input-group">
        <label>Takım:</label>
        <input type="text" name="takim" value={updatedFutbolcu.takim} onChange={handleChange} />
      </div>
      <button className="guncelle-btn" onClick={handleUpdate}>
        Kaydet
      </button>
    </div>
  );
};

export default FutbolcuGuncelle;
