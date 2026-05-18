import React, { useState } from 'react';
function Mensagem() {
const [mensagem, setMensagem] = useState(false);

const ocultar = () => {

setMensagem(!mensagem);
};


return (
<div className="contador">
<h1>{mensagem ? "Mensagem visível" : ""}</h1>
<button onClick={ocultar}>
  {mensagem ? "Ocultar Mensagem" : "Mostrar Mensagem"}
</button>
</div>
);
}
export default Mensagem;