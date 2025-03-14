import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/MenuHamburguesaTerciaria.css';
import { FaTimes, FaChevronLeft } from 'react-icons/fa';

function MenuHamburguesaTerciaria({ toggleMenu, seleccionadaSeccionDos, retrocederMenu, setMenuActual, seleccionadoItem, seleccionadoItemDos }) {
    const navigate = useNavigate();

    const handleNavigation = (item) => {
        navigate(`/${item}`, { state: { itemSeleccionado: item } });
        toggleMenu();
        setMenuActual('principal');
    }

    return (
        <article className='contenedor-menu-hamburguesa-info-terciaria'>

            <div className='contenedor-primera-seccion-menu-hamburguesa-terciaria'>

                <p className='titulo-uno-menu-hamburguesa-terciaria'>Uno</p>
                <FaTimes className='icono-cerrar'
                    onClick={() => {
                        toggleMenu();
                        setMenuActual('principal');
                    }} />

            </div>

            <div className='contenedor-segunda-tercera-cuarta-seccion-menu-hamburguesa-terciaria'>

                <div className='contenedor-segunda-seccion-menu-hamburguesa-terciaria' >

                    <div className='contenedor-padre-icono-expansion-izquierda-texto-volver-a'>

                        <div className='contenedor-icono-expansion-izquierda-texto-volver-a' onClick={retrocederMenu}>
                            <FaChevronLeft className='icono-expansion-izquierda' />
                            <p className='texto-volver-a-menu-hamburguesa-terciaria'>
                                Volver a {seleccionadoItem}
                            </p>
                        </div>
                        
                    </div>

                </div>

                <div className='contenedor-tercera-seccion-menu-hamburguesa-terciaria'>

                    <p className='texto-seleccion-menu-hamburguesa-terciaria'>{seleccionadoItemDos}</p>
                    <p className='texto-ver-todo-menu-hamburguesa-terciaria'>Ver todo</p>

                </div>

                <div
                    className='contenedor-cuarta-seccion-menu-hamburguesa-terciaria'>
                    {seleccionadaSeccionDos && (
                        seleccionadaSeccionDos.map((eleccion) => (
                            <div className='contenedor-item-iconos-expansion-menu-hamburguesa-terciaria'
                                key={eleccion.id}
                                onClick={() => handleNavigation(eleccion.item1)}
                            >
                                <p className='texto-item-seleccion-menu-hamburguesa-terciaria'>{eleccion.titulo1}</p>
                            </div>
                        ))
                    )}

                </div>

            </div>

        </article>
    );
}

export default MenuHamburguesaTerciaria;