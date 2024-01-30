import React, { useState } from 'react';
import FutbolcuListesi from '../components/FutbolcuListesi';
import FutbolcuEkle from '../components/FutbolcuEkle';
import './Anasayfa.css';

const Anasayfa = () => {
  const [showComponents, setShowComponents] = useState(false);

  const handleButtonClick = () => {
    setShowComponents(!showComponents);
  };

  const handleFutbolcuEkle = (yeniFutbolcu) => {
    console.log('Yeni futbolcu eklendi:', yeniFutbolcu);
  };

  return (
    <div className="anasayfa-container">
      <div className="header">
        <h1>FUTBOLCU YÖNETİM SİSTEMİ</h1>
        <button onClick={handleButtonClick} className="toggle-btn">
          {showComponents ? 'GERİ' : 'TIKLA'}
        </button>
      </div>
      <div className="content">
        {showComponents && (
          <div>
            <FutbolcuListesi />
            <FutbolcuEkle onEkle={handleFutbolcuEkle} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Anasayfa;
