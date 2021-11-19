import React from "react";
import { Link } from "react-router-dom";


export default function Cidade() {
    return(
        <>
           <div>
               <h1>Cidade</h1>
               <img src="https://photo620x400.mnstatic.com/5050bcce757dc3c1d9c14725f62262b4/recife.jpg" alt="Recife de cima" />
               <p>Com certeza a cidade mais bonita do mundo se chama RECIFE.</p>
            </div>
            <div>
                <ul>
                    <li>
                        <Link className="links" to="/" exact >Voltar para HOME</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}