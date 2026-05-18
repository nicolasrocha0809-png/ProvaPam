import React, { useState, useEffect } from 'react';

function Saudacao() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const hora = new Date().getHours();

    if (hora >= 5 && hora < 12) {
      setMsg('Bom dia!');
    } else if (hora >= 12 && hora < 18) {
      setMsg('Boa tarde!');
    } else {
      setMsg('Boa noite!');
    }
  }, []);

  return (
    <div className="contador">
      <h1>{msg}</h1>
    </div>
  );
}

export default Saudacao;