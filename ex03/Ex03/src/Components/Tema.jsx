import React, { useState } from 'react';
import './Tema.css';

function AlternarTema() {
const [temaEscuro, setTemaEscuro] = useState(false);

const alternar = () => {

const clique = temaEscuro ? false : true;
setTemaEscuro(clique);
};


return (
<div className={temaEscuro ? 'tema-escuro' : 'tema-claro'}>
<h1>{temaEscuro}</h1>
<button onClick={alternar}>
Alternar Tema
</button>
</div>
);
}
export default AlternarTema;