import React from "react"
import Logo from "./padaria.png"
import "../../App.css"

function Header() {
    return (
    <header>
    <nav>
        <img src={Logo} alt=''/>
        <ul>
            <li>Cardapio</li>
            <li>Contatos</li>
            <li>Encomendas</li>
            <li>Unidades</li>
        </ul>
    </nav>
    </header>
    )
}
export default Header