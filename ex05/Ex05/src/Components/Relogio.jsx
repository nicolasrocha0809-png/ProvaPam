import React, { useState, useEffect } from 'react';

function Relogio() {
  const [relogio, setRelogio] = useState(new Date());
 
  useEffect(() => {
    const interval = setInterval(() => {
      setRelogio(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const horaAtual = relogio.toLocaleTimeString('pt-BR');

  return (
    <div className="contador">
      <h1>{horaAtual}</h1>
    </div>
  );
}

export default Relogio;