import { useState } from "react"
 
export default function RandomNumberGenerator(){
    const [num, setNum] = useState(0)

    const gerarNumero = () =>{
        const x = Math.floor(Math.random() * 100) + 1
        setNum(x)
    }
return (
    <div className="random-container">
        <h2>Numero Aleatorio: </h2>
        <h1>{num}</h1>
        <button onClick={gerarNumero}>
            clique no gerador
        </button>

    </div>
);
}