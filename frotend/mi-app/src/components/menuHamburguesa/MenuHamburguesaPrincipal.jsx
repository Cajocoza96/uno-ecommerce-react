import React, { useState, useEffect } from 'react';

import menuHamburguesaData from './data/menuHamburguesaData.json';

import './css/MenuHamburguesaPrincipal.css';

import { FaTimes, FaChevronRight } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const iconosMap = {
    FaChevronRight: <FaChevronRight className='icono-expansion-derecha' />
}

function MenuHamburguesaPrincipal({ toggleMenu, toggleMenuDos, setseleccionadaSeccion, setMenuActual, setSeleccionadoItem }) {

    const [novedades, setNovedades] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        const procesarIconos = (items) => {
            return items.map(item => ({
                ...item, iconoExpansionDerecha:
                    iconosMap[item.iconoExpansionDerecha] || null,
                contenido: item.contenido ? procesarIconos(item.contenido) : null,
                subContenido: item.subContenido ? procesarIconos(item.subContenido) : null
            }));
        };

        setNovedades(procesarIconos(menuHamburguesaData.novedades));
        setCategorias(procesarIconos(menuHamburguesaData.categorias));
        setServicios(menuHamburguesaData.servicios);


    }, []);

    return (
        <article className='contenedor-menu-hamburguesa-info-principal'>

            <div className='contenedor-primera-seccion-menu-hamburguesa-principal'>

                <p className='titulo-uno-menu-hamburguesa-principal'>Uno</p>
                <FaTimes className='icono-cerrar' onClick={toggleMenu} />

            </div>

            <div className='contenedor-segunda-tercera-cuarta-quinta-seccion-menu-hamburguesa-principal'>

                <div className='contenedor-segunda-seccion-menu-hamburguesa-principal'>

                    <div className='contenedor-icono-ubicacion-recibir-pedido-icono-expansion-menu' onClick={toggleMenuDos}>
                        <HiOutlineLocationMarker className='icono-ubicacion' />
                        <p className='texto-como-recibir-pedido-menu-hamburguesa-principal'>
                            Método de entrega
                        </p>
                        <FaChevronRight className='icono-expansion-derecha' />
                    </div>


                    <div className='contenedor-vacio-menu-hamburguesa-principal'></div>
                </div>

                <div className='contenedor-tercera-seccion-menu-hamburguesa-principal'>

                    <p className='texto-novedades-menu-hamburguesa-principal'>Novedades</p>

                    {novedades.map((novedad) => (
                        <div className='contenedor-item-iconos-expansion-menu-hamburguesa-tercera-principal' key={novedad.id}
                            onClick={() => {
                                setseleccionadaSeccion(novedad.contenido);
                                setSeleccionadoItem(novedad.titulo1);
                                setMenuActual('secundaria');
                            }}>
                            <p className='texto-item-novedades-menu-hamburguesa-tercera-principal'>{novedad.titulo1}</p>
                            {novedad.iconoExpansionDerecha}
                        </div>
                    ))}

                </div>

                <div className='contenedor-cuarta-seccion-menu-hamburguesa-principal'>

                    <p className='texto-categorias-menu-hamburguesa-principal'>Categorias</p>

                    {categorias.map((categoria) => (
                        <div className='contenedor-item-iconos-expansion-menu-hamburguesa-cuarta-principal' key={categoria.id}
                            onClick={() => {
                                setseleccionadaSeccion(categoria.contenido);
                                setSeleccionadoItem(categoria.titulo1);
                                setMenuActual('secundaria');
                            }}>
                            <p className='texto-item-categorias-menu-hamburguesa-cuarta-principal'>{categoria.titulo1}</p>
                            <div className='contenedor'>
                                {categoria.iconoExpansionDerecha}
                            </div>
                        </div>
                    ))}

                </div>


                <div className='contenedor-quinta-seccion-menu-hamburguesa-principal'>

                    <p className='texto-servicios-menu-hamburguesa-principal'>Servicios</p>

                    {servicios.map((servicios) => (
                        <div className='contenedor-item-iconos-expansion-menu-hamburguesa-quinta-principal' key={servicios.id}>
                            <p className='texto-item-servicios-menu-hamburguesa-quinta-principal'>{servicios.titulo1}</p>
                            {servicios.iconoExpansionDerecha}
                        </div>
                    ))}

                </div>

            </div>

        </article>
    );
}

export default MenuHamburguesaPrincipal;