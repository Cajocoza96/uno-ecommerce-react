import React from 'react';

import './css/ContenidoExtraFooter.css';

import { FaFire } from 'react-icons/fa';

function ContenidoExtraFooter() {

    const informaciones = [
        {
            id: 1,
            icono: <FaFire className='icono-fuego'/>,
            textoInformacion1: "Retal Ecommerce",
            textoInformacion2: "award 2024"
        },
        {
            id: 2,
            icono: <FaFire className='icono-fuego'/>,
            textoInformacion1: "Mas de 400 mil",
            textoInformacion2: "productos"
        },
        {
            id: 3,
            icono: <FaFire className='icono-fuego'/>,
            textoInformacion1: "Compras",
            textoInformacion2: "seguras"
        },
        {
            id: 4,
            icono: <FaFire className='icono-fuego'/>,
            textoInformacion1: "Acumulas Puntos",
            textoInformacion2: "colombia"
        },
        {
            id: 5,
            icono: <FaFire className='icono-fuego'/>,
            textoInformacion1: "Paga en linea o en",
            textoInformacion2: "efectivo"
        },

    ]

    return (
        <article className='contenedor-contenido-extra-footer-varios'>

            {informaciones.map((informacion) => (
                <div className='contenedor-contenido-extra-footer' key={informacion.id}>

                    <div className='contenedor-icono-contenido-extra-footer'>
                        {informacion.icono}
                    </div>

                    <div className='contenedor-info-contenido-extra-footer'>
                        <p className='texto-1-info-contenido-extra-footer'>{informacion.textoInformacion1}</p>
                        <p className='texto-2-info-contenido-extra-footer'>{informacion.textoInformacion2}</p>
                    </div>
                </div>
            ))}


        </article>
    );
}

export default ContenidoExtraFooter;