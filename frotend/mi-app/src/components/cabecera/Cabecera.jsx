import React from 'react';
import './css/Cabecera.css';

import { Link } from 'react-router-dom';

import BotonCompra from '../buttons/BotonCompra';

import { FaFire, FaDesktop, FaSearch, FaChevronRight } from 'react-icons/fa';
import { HiOutlineBell, HiOutlineUser, HiOutlineShoppingCart, HiOutlineLocationMarker, HiOutlineMenu } from 'react-icons/hi';

function Cabecera({ toggleMenu, toggleMenuDos, toggleMenuTres, menuVisible, menuVisibleDos, menuVisibleTres }) {
    return (
        <header className={`cabecera ${menuVisible || menuVisibleDos || menuVisibleTres ? 'overlay-active' : ''}`}>
            {menuVisible && <div className='overlay'></div>}
            {menuVisibleDos && <div className='overlay'></div>}
            {menuVisibleTres && <div className='overlay'></div>}

            <div className='contenedor-primera-seccion-cabecera'>

                <div className='contenedor-envio-gratis'>

                    <div className='contenedor-todos-lo'>
                        <FaFire className='icono-fuego' />
                        <p className='texto-todos-lo'>Envío gratis todos los</p>
                    </div>

                    <div className='contenedor-articulo-envio-gratis'>
                        <p className='texto-articulo-envio-gratis'>computadores</p>
                        <FaDesktop className='icono-computadora' />
                    </div>

                </div>

                <BotonCompra value='¡Comprar ya!' />

            </div>

            <div className='contenedor-segunda-seccion-cabecera'>

                <div className='contenedor-menu-hamburguesa' >

                    <div className='contenedor-titulo-uno'>
                        <Link className='link-titulo-uno' to='/'>
                            <p className='titulo-uno'>Uno</p>
                        </Link>
                    </div>

                    <div className='contenedor-icono-menu-hamburguesa-titulo-menu' onClick={toggleMenu} >

                        <div className='contenedor-icono-menu-hamburguesa-hover'>
                            <HiOutlineMenu className='icono-menu-hamburguesa' />
                        </div>

                        <div className='contenedor-titulo-de-menu'>
                            <p className='titulo-de-menu'>Menú</p>
                        </div>
                    </div>
                </div>

                <div className='contenedor-barra-icono-busqueda'>
                    <FaSearch className='icono-busqueda' />
                    <input type='text' placeholder='¿Qué buscas?' />
                </div>

                <div className='contenedor-icono-ubicacion-recibir-pedido-icono-expansion-cabecera-vista-compu' onClick={toggleMenuDos}>
                    <HiOutlineLocationMarker className='icono-ubicacion' />

                    <div className='contenedor-como-quieres-recibir-tu-pedido'>
                        <p className='texto-quieres-recibir'>Método de entrega</p>
                    </div>

                    <FaChevronRight className='icono-expansion-derecha' />
                </div>

                <div className='contenedor-icon-noti-usua-carri'>

                    <div className='contenedor-de-icono-notificaciones' onClick={toggleMenuTres}>

                        <div className='contenedor-icono-notificaciones-hover'>
                            <HiOutlineBell className='icono-notificaciones' />
                        </div>

                        <div className='contenedor-texto-notificaciones'>
                            <p className='texto-notificaciones'>Notificaciones</p>
                        </div>
                    </div>

                    <Link className='link-crear-cuenta' to='/crear-cuenta'>
                        <div className='contenedor-de-icono-usuario'>

                            <div className='contenedor-icono-usuario-hover'>
                                <HiOutlineUser className='icono-usuario' />
                            </div>

                            <div className='contenedor-texto-mi-cuenta'>
                                <p className='texto-mi-cuenta'>Mi</p>
                                <p className='texto-mi-cuenta'>cuenta</p>
                            </div>
                        </div>
                    </Link>

                    <Link className='link-cuadro-compra' to='/cuadro-compra'>
                        <div className='contenedor-de-icono-carrito'>

                            <div className='contenedor-icono-carrito-hover'>
                                <HiOutlineShoppingCart className='icono-carrito' />
                            </div>

                            <div className='contenedor-texto-carrito'>
                                <p className='texto-carrito'>Carrito</p>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>

            <div className='contenedor-tercera-seccion-cabecera'>

                <div className='contenedor-icono-ubicacion-recibir-pedido-icono-expansion-cabecera' onClick={toggleMenuDos}>
                    <HiOutlineLocationMarker className='icono-ubicacion' />
                    <div className='contenedor-como-quieres-recibir-tu-pedido'>
                        <p className='texto-quieres-recibir'>Método de entrega</p>
                    </div>
                    <FaChevronRight className='icono-expansion-derecha' />
                </div>

                <div className='contenedor-vacio-cabecera'></div>

            </div>

        </header>
    );
}

export default Cabecera;