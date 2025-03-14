import React from 'react';

import './css/AutenticacionCrearCuenta.css';

import { Link } from 'react-router-dom';

import BotonEnviar from '../buttons/BotonEnviar';

import BotonVolver from '../buttons/BotonVolver';

import Compra100PorCientoSegura from '../cabecera/Compra100PorCientoSegura';

import DerechosReservadosFooter from '../footer/DerechosReservadosFooter';

function AutenticacionCrearCuenta() {

    return (
        <div className='contenedor-autenticacion-crear-cuenta-derechos-footer-1'>

            <div className='contenedor-autenticacion-crear-cuenta-1'>

                <Compra100PorCientoSegura />

                <div className='contenedor-eligir-opcion-ingresar-1'>
                    <p className='texto-eligir-opcion-ingresar-1'>Elige una opcion para ingresar</p>
                </div>

                <div className='contenedor-crear-cuenta-clave-acceso-ingresar-terminos-condiciones-1'>

                    <div className='contenedor-crear-cuenta-1'>

                        <div className='contenedor-titulo-ingresar-email-1'>
                            <p className='texto-titulo-ingresar-email-1'>Ingresa tu email</p>
                        </div>

                        <div className='contenedor-ingresar-email-1'>
                            <input type='email' placeholder='Ingresa tu email' />
                        </div>

                        <BotonEnviar value='Enviar' />

                        <Link className='link-boton-volver-1' to='/'>
                            <BotonVolver value='Volver' />
                        </Link>

                    </div>

                    <div className='contenedor-clave-acceso-ingresar-email-contrasena-terminos-condiciones-1'>

                        <div className='contenedor-recibir-clave-acceso-1'>
                            <p className='texto-recibir-clave-acceso-1'>Recibe la clave de acceso</p>
                        </div>

                        <Link className='link-ingresar-email-contrasena-1' to='/iniciar-seccion'>
                            <div className='contenedor-ingresar-email-contrasena-1'>
                                <p className='texto-ingresar-email-contrasena-1'>Ingresar con email y contraseña</p>
                            </div>
                        </Link>

                        <div className='contenedor-texto-terminos-condiciones-tratamientos-datos-1'>
                            <p className='texto-terminos-condiciones-tratamientos-datos-1'>Al iniciar o crear una cuenta aceptas
                                <span className='subrayado-1'> terminos y condiciones </span>
                                y autorizas el
                                <span className='subrayado-1'> tratamiento de tus datos personales </span>
                                con las siguientes condiciones
                            </p>
                        </div>

                    </div>


                </div>

            </div>

            <DerechosReservadosFooter />
        </div>

    );
}

export default AutenticacionCrearCuenta;