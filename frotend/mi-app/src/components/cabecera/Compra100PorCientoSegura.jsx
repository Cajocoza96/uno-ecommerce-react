import React from 'react';

import './css/Compra100PorCientoSegura.css';

import { FaExclamationCircle, FaLock } from 'react-icons/fa';

import { Link } from 'react-router-dom';

function Compra100PorCientoSegura() {
    return (
        <div className='contenedor-signo-exclamacion-compra-segura-candado-titulo-uno'>

            <div className='contenedor-tarjeta-uno'>
                <Link className='link-titulo-uno' to='/'>
                    <p className='tarjeta-uno'>Uno</p>
                </Link>
            </div>

            <div className='contenedor-signo-exclamacion-compra-segura-candado'>

                <FaExclamationCircle className='signo-exclamacion' />
                <div className='contenedor-compra-segura-candado'>
                    <p className='texto-compra-segura'>
                        Tu compra es 100% segura
                    </p>
                    <FaLock className='icono-candado' />
                </div>

            </div>

        </div>
    );
}
export default Compra100PorCientoSegura;