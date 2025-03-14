import React from 'react';

import './css/MenuHamburguesaSecundaria.css';

import { FaTimes, FaChevronLeft } from 'react-icons/fa';

function MenuHamburguesaSecundaria({ toggleMenu, seleccionadaSeccion, setseleccionadaSeccionDos, setMenuActual, retrocederMenu, seleccionadoItem, setSeleccionadoItemDos }) {

    return (
        <article className='contenedor-menu-hamburguesa-info-secundaria'>

            <div className='contenedor-primera-seccion-menu-hamburguesa-secundaria'>

                <p className='titulo-uno-menu-hamburguesa-secundaria'>Uno</p>
                <FaTimes className='icono-cerrar'
                    onClick={() => {
                        toggleMenu();
                        setMenuActual('principal');
                    }} />

            </div>

            <div className='contenedor-segunda-tercera-cuarta-seccion-menu-hamburguesa-secundaria'>

                <div className='contenedor-segunda-seccion-menu-hamburguesa-secundaria'>

                    <div className='contenedor-padre-icono-expansion-izquierda-texto-volver-a'>

                        <div className='contenedor-icono-expansion-izquierda-texto-volver-a' onClick={retrocederMenu}>
                            <FaChevronLeft className='icono-expansion-izquierda' />
                            <p className='texto-volver-a-menu-hamburguesa-secundaria'>
                                Volver a menu principal
                            </p>
                        </div>

                    </div>

                </div>

                <div className='contenedor-tercera-seccion-menu-hamburguesa-secundaria'>

                    <p className='texto-seleccion-menu-hamburguesa-secundaria'>{seleccionadoItem}</p>
                    <p className='texto-ver-todo-menu-hamburguesa-secundaria'>Ver todo</p>

                </div>

                <div className='contenedor-cuarta-seccion-menu-hamburguesa-secundaria'>

                    {seleccionadaSeccion && (
                        seleccionadaSeccion.map((eleccion) => (
                            <div className='contenedor-item-iconos-expansion-menu-hamburguesa-cuarta-secundaria' key={eleccion.id}
                                onClick={() => {
                                    setseleccionadaSeccionDos(eleccion.subContenido);
                                    setMenuActual('terciaria');
                                    setSeleccionadoItemDos(eleccion.titulo1);
                                }}>
                                <p className='texto-item-seleccion-menu-hamburguesa-cuarta-secundaria'>{/*{eleccion.item1}*/}{eleccion.titulo1}</p>
                                {eleccion.iconoExpansionDerecha}
                            </div>
                        ))
                    )}
                </div>

            </div>

        </article>
    );
}

export default MenuHamburguesaSecundaria;