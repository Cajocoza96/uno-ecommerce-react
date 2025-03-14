import React from 'react';

import './css/CuadroCompra.css';

import { FaShoppingCart } from 'react-icons/fa';

import BotonSigueComprando from '../buttons/BotonSigueComprando';

import Compra100PorCientoSegura from '../cabecera/Compra100PorCientoSegura';

import DerechosReservadosFooter from '../footer/DerechosReservadosFooter';

import { Link } from 'react-router-dom';

function CuadroCompra() {

    return (
        <div className='contenedor-cuadro-compra-footer'>

            <Compra100PorCientoSegura/>

            <div className='contenedor-icono-carrito-carrito-vacio-tenemos-boton-sigue-comprando'>

                <div className='contenedor-icono-carrito-compra'>
                    <FaShoppingCart className='icono-carrito' />
                </div>

                <p className='texto-carrito-vacio'>Tu carrito esta vacio</p>

                <div className='contenedor-tenemos'>
                    <p className='texto-tenemos'>En Uno tenemos mas de 100 mil productos</p>
                    <p className='texto-tenemos'>para que elijas lo que mas te gusta</p>
                </div>

                <Link to='/'>
                    <BotonSigueComprando value='Sigue comprando' />
                </Link>

            </div>

            <DerechosReservadosFooter />
        </div>
    )
}

export default CuadroCompra;