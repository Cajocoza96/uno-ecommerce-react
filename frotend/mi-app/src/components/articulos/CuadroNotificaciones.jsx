import React from 'react';

import './css/CuadroNotificaciones.css';

import { FaTimes } from 'react-icons/fa';
import { HiOutlineBell } from 'react-icons/hi';

function CuadroNotificaciones({toggleMenuTres}) {
    return (
        <div className='contenedor-notificaciones'>

            <div className='contenedor-icono-notificaciones-icono-cerrar'>

                <div className='contenedor-icono-notificaciones'>
                    <HiOutlineBell className='icono-notificaciones' />
                    <p className='texto-notificaciones'>Notificaciones</p>
                </div>

                <FaTimes className='icono-cerrar' onClick={toggleMenuTres}/>

            </div>

            <div className='contenedor-informacion-notificaciones'>
                <p className='texto-informacion-notificaciones'>Sin notificaciones</p>
            </div>

        </div>
    )
}

export default CuadroNotificaciones;