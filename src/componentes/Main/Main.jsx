import React, {useState} from "react" //Chamando o hook useState
import Paocomovo from "../../componentes/Main/paocomovo.jpg"

function Main() { //componente funcional

    const [numero, setNumero] = useState(0)

    const Adicionar =()=> {
        if (numero < 10)
            setNumero(numero + 1)
        }

    return (    
        <main>
        <div className="card">
            <img className="paocomovo" src={Paocomovo} alt=""/>
            <h3> 6,00 </h3>
            <button onClick={Adicionar}>COMPRAR</button>
            <h2>{numero}</h2>
            </div>
        
        </main>
    )
}
export default Main