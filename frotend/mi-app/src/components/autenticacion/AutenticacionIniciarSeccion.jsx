import React, { useState } from 'react';

import './css/AutenticacionIniciarSeccion.css';

import { Link } from 'react-router-dom';

import BotonEntrar from '../buttons/BotonEntrar';

import { FaEye, FaEyeSlash } from 'react-icons/fa';

import iconoGoogle from '../assets/icon/iconoGoogle.png';

import Compra100PorCientoSegura from '../cabecera/Compra100PorCientoSegura';

import DerechosReservadosFooter from '../footer/DerechosReservadosFooter';

function AutenticacionIniciarSeccion() {

    const [verContrasena, setVerContrasena] = useState(false);

    const toggleVisibilidadContrasena = () => {
        setVerContrasena(!verContrasena);
    }

    return (
        <div className='contenedor-autenticacion-iniciar-seccion-derechos-footer'>

            <div className='contenedor-autenticacion-iniciar-seccion'>

                <Compra100PorCientoSegura />

                <div className='contenedor-eligir-opcion-ingresar'>
                    <p className='texto-eligir-opcion-ingresar'>Elige una opcion para ingresar</p>
                </div>

                <div className='contenedor-iniciar-seccion-clave-acceso-ingresar-google-terminos-condiciones'>

                    <div className='contenedor-inicio-seccion'>

                        <div className='contenedor-iniciar-con-email-contrasena'>
                            <p className='texto-iniciar-con-email-contrasena'>Inicia con email y contraseña</p>
                        </div>

                        <div className='contenedor-ingresar-email'>
                            <input type='email' placeholder='Ingresa tu email' />
                        </div>

                        <div className='contenedor-icono-ingresar-contrasena'>

                            <div
                                onClick={toggleVisibilidadContrasena}>
                                {verContrasena ? <FaEyeSlash className='icono-visualizar-contrasena' /> :
                                    <FaEye className='icono-visualizar-contrasena' />}
                            </div>

                            <input type={verContrasena ? 'text' : 'password'}
                                placeholder='Ingresa tu contraseña' />

                        </div>

                        <div className='contenedor-olvidaste-contrasena'>
                            <p className='texto-olvidaste-contrasena'>Olvidaste tu contraseña</p>
                        </div>

                        <BotonEntrar value='Entrar' />

                        <Link className='link-sin-contrasena-creala' to='/crear-cuenta'>
                            <div className='contenedor-sin-contrasena-creala'>
                                <p className='texto-sin-contrasena-creala'>¿No tienes una contraseña? Creala ahora</p>
                            </div>
                        </Link>

                    </div>

                    <div className='contenedor-clave-acceso-ingresar-con-google-terminos-condiciones'>

                        <div className='contenedor-recibir-clave-acceso'>
                            <p className='texto-recibir-clave-acceso'>Recibe la clave de acceso</p>
                        </div>

                        <div className='contenedor-icono-ingresar-con-google'>

                            <div className='contenedor-icono-google'>
                                <img className='icono-google' src={iconoGoogle} alt={iconoGoogle} />
                            </div>

                            <div className='contenedor-ingresar-con-google'>
                                <p className='texto-ingresar-con-google'>Ingresar con Google</p>
                            </div>
                        </div>

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

export default AutenticacionIniciarSeccion;