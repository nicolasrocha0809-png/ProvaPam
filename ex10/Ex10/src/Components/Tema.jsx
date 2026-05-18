import React, { useState, useEffect } from 'react';
import './Tema.css';

function AlternarTema() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const alternar = () => {
    setTemaEscuro(!temaEscuro);
  };

  useEffect(() => {
    if (temaEscuro) {
      document.body.className = 'App-escuro';
    } else {
      document.body.className = 'App-claro';
    }
  }, [temaEscuro]);

  return (
    <div className="tema-container">
      <button className="btn-tema" onClick={alternar}>
        {temaEscuro ? 'Modo Claro' : 'Modo Escuro'}
      </button>
    </div>
  );
}

export default AlternarTema;