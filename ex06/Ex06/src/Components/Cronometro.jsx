import React, { useState, useEffect } from 'react';

function Cronometro() {
  const [tempo, setTempo] = useState(0);
  const [contando, setContando] = useState(false);

  useEffect(() => {
    let interval; 

    if (contando) {
      interval = setInterval(() => {
        setTempo((prevTempo) => prevTempo + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [contando]);

  function Iniciar() {
    setContando(true);
  }

  function Pausar() {
    setContando(false);
  }

  function resetar() {
    setContando(false);
    setTempo(0);
  }

  return (
    <div className="contador">
      <h1>{tempo}</h1>
      <button onClick={Iniciar}>
        Iniciar
      </button>
      <button onClick={Pausar}>
        Pausar
      </button>
      <button onClick={resetar}>
        Resetar
      </button>
    </div>
  );
}

export default Cronometro;