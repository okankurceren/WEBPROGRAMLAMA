import React, { useState, useEffect } from 'react';
import { getFutbolcular, addFutbolcu, deleteFutbolcu, updateFutbolcu } from '../services/api';
import FutbolcuEkle from './FutbolcuEkle';
import FutbolcuGuncelle from './FutbolcuGuncelle';
import './FutbolcuListesi.css';

const FutbolcuListesi = () => {
  const [futbolcular, setFutbolcular] = useState([]);
  const [selectedFutbolcu, setSelectedFutbolcu] = useState(null);

  useEffect(() => {
    getFutbolcular()
      .then(response => {
        const data = response.data;
        setFutbolcular(data);
      })
      .catch(error => console.error('API hatası:', error));
  }, []);

  const handleFutbolcuEkle = (yeniFutbolcu) => {
    addFutbolcu(yeniFutbolcu)
      .then(response => {
        const updatedFutbolcular = [...futbolcular, response.data];
        setFutbolcular(updatedFutbolcular);
      })
      .catch(error => console.error('API hatası:', error));
  };

  const handleSil = (id) => {
    deleteFutbolcu(id)
      .then(() => {
        const updatedFutbolcular = futbolcular.filter(futbolcu => futbolcu.id !== id);
        setFutbolcular(updatedFutbolcular);
      })
      .catch(error => console.error('API hatası:', error));
  };

  const handleGuncelle = (futbolcu) => {
    // Güncelleme işlemi burada yapılır
    updateFutbolcu(futbolcu.id, futbolcu)
      .then(() => {
        const updatedFutbolcular = futbolcular.map(item =>
          item.id === futbolcu.id ? futbolcu : item
        );
        setFutbolcular(updatedFutbolcular);
        setSelectedFutbolcu(null); // Güncelleme tamamlandığında seçili futbolcuyu sıfırla
      })
      .catch(error => console.error('API hatası:', error));
  };

  return (
    <div>
      <h2>Futbolcu Listesi</h2>
      <ul className="futbolcu-listesi">
        {futbolcular.map(futbolcu => (
          <li key={futbolcu.id} className="futbolcu-item">
            <span>{`${futbolcu.isim} ${futbolcu.soyisim} - ${futbolcu.takim}`}</span>
            <div>
              <button className="sil-btn" onClick={() => handleSil(futbolcu.id)}>
                Sil
              </button>
              <button className="guncelle-btn" onClick={() => setSelectedFutbolcu(futbolcu)}>
                Güncelle
              </button>
            </div>
          </li>
        ))}
      </ul>
      <FutbolcuEkle onEkle={handleFutbolcuEkle} />
      {selectedFutbolcu && (
        <FutbolcuGuncelle futbolcu={selectedFutbolcu} onUpdate={handleGuncelle} />
      )}
    </div>
  );
};

export default FutbolcuListesi;
