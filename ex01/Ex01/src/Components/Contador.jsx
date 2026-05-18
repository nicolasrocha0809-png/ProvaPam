import React, { useState } from 'react';
function Contador() {
const [numero, setNumero] = useState(0);

const soma = () => {

const soma = numero + 1;
setNumero(soma);
};

const subtracao = () => {
const subtracao = numero - 1;
setNumero(subtracao);
};

const resetar = () => {
setNumero(0);
};

return (
<div className="contador">
<h2>Número:</h2>
<h1>{numero}</h1>
<button onClick={soma}>
Contador
</button>
<button onClick={subtracao}>
Subtrair
</button>
<button onClick={resetar}>
Resetar
</button>
</div>
);
}
export default Contador;