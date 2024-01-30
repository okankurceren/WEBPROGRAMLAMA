import React from 'react';
import { deleteFutbolcu } from '../services/api';

const FutbolcuSil = ({ id }) => {
  const handleSil = () => {
    deleteFutbolcu(id)
      .then(() => console.log('Futbolcu silindi.'))
      .catch(error => console.error('API hatası:', error));
  };

  return (
    <div>
      <h2>Futbolcu Sil</h2>
      <button onClick={handleSil}>Sil</button>
    </div>
  );
};

export default FutbolcuSil;
