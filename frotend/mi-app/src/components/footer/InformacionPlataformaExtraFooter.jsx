import React, { useState, useEffect } from 'react';

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import informacionPlataformaExtraFooterData from './data/informacionPlataformaExtraFooterData.json';

import './css/InformacionPlataformaExtraFooter.css';

function InformacionPlataformaExtraFooter() {

    const [idExpandido, setidExpandido] = useState(null);

    const [informaciones, setInformaciones] = useState([]);

    useEffect(() => {
        setInformaciones(informacionPlataformaExtraFooterData.informaciones);
    }, []);


    const manejarAlternar = (id) => {
        setidExpandido(idExpandido === id ? null : id);
    }

    return (
        <article className='contenedor-informacion-plataforma-extra-icono-footer-varios'>

            {informaciones?.map((informacion) => (
                <div className='contenedor-informacion-plataforma-extra-icono-footer' key={informacion.id}>
                    <div className='contenedor-informacion-plataforma-footer' onClick={() => manejarAlternar(informacion.id)}>

                        <p className='texto-principal-informacion-plataforma-footer'>
                            {informacion.textoPrincipal}

                            {idExpandido === informacion.id && (
                                <div className='enlaces-desplegables'>
                                    {informacion.enlaces.map((enlace, index) => (
                                        <a key={index} className='enlace-desplegable'>
                                            {enlace}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </p>

                        <div className='contenedor-icono-plataforma-extra-footer'>
                            {idExpandido === informacion.id ? (
                                <FaChevronUp className='icono-expansion-arriba' />
                            ) : (
                                <FaChevronDown className='icono-expansion-abajo' />
                            )}
                        </div>
                    </div>

                </div>
            ))}

        </article>
    );
}

export default InformacionPlataformaExtraFooter;