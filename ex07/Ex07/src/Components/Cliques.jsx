import React, { useState } from 'react';
function Cliques() {
const [numero, setNumero] = useState(0);

const clicada = () => {

const clique = numero + 1;
setNumero(clique);
};


return (
<div className="contador">
<h2>Número:</h2>
<h1>{numero}</h1>
<button onClick={clicada}>
Contador de Cliques
</button>
</div>
);
}
export default Cliques;