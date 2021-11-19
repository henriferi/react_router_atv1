import React from "react";
import { Link } from "react-router-dom";



export default function Home() {
    return(
        <>
            <div className="titulo">
                <h1>Home</h1>
                <p>Bem vindo a minha aplicação usando REACT ROUTER DOM</p>
            </div> 
            <div>
                <h1>Menu</h1>   
                <ul>
                    <li>
                        <Link className="links" to="/Musica">Clique aqui para conhecer minha música favorita</Link>
                    </li>
                    <li>
                        <Link className="links" to="/Cidade">Clique aqui para conhecer minha cidade favorita</Link>
                    </li>
                </ul>          
            </div>
        </>
    )
}
