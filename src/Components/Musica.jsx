import React from "react";
import { Link } from "react-router-dom";


export default function Musica() {
    return(
        <>
           <div>
               <h1>Musica</h1>
            </div>
            <div>
                <p>Não costumo ter musicas preferidas, mas em homanagem uma cantora que eu gosto muito e que vai fazer muita falta eu escolho:</p>
                <h2>Marilia Mendonça: Estranho</h2>
                <img src="https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2021/11/06/806x444/1_whatsapp_image_2021_11_06_at_11_34_25-19397242.jpeg" alt="" />
            </div>
            <div>
            <Link className="links" to="/">Voltar para HOME</Link>
            </div>
        </>
    )
}