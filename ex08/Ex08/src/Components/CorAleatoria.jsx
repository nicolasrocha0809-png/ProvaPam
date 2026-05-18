import React, { useState } from 'react';
import './CorAleatoria.css';
function CorAleatoria() {
  
  const [corDeFundo, setCorDeFundo] = useState('#FFFFFF');

  const gerarCorAleatoria = () => {
    const caracteres = '0123456789ABCDEF';
    let cor = '#';
    
    for (let i = 0; i < 6; i++) {
      const indiceAleatorio = Math.floor(Math.random() * 16);
      cor += caracteres[indiceAleatorio];
    }

    setCorDeFundo(cor);
  };

  return (
    <div className="container" style={{ backgroundColor: corDeFundo }}>
      <div className="conteudo">
        <button onClick={gerarCorAleatoria}>
          Mudar cor de fundo
        </button>
      </div>
    </div>
  );
}

export default CorAleatoria;