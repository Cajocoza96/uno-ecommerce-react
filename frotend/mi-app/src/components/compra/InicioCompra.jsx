import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import './css/InicioCompra.css';

import Cabecera from '../cabecera/Cabecera';

import MenuHamburguesaPrincipal from '../menuHamburguesa/MenuHamburguesaPrincipal';
import MenuHamburguesaSecundaria from '../menuHamburguesa/MenuHamburguesaSecundaria';
import MenuHamburguesaTerciaria from '../menuHamburguesa/MenuHamburguesaTerciaria';

import RecibirPedidoCompraEnvio from '../articulos/RecibirPedidoCompraEnvio';

import CuadroNotificaciones from '../articulos/CuadroNotificaciones';

import ArticulosCompra from './ArticulosCompra';

import FooterCompleto from '../footer/FooterCompleto';

function InicioCompra() {

    const [menuVisible, setMenuVisible] = useState(false);
    const [menuVisibleDos, setMenuVisibleDos] = useState(false);
    const [menuVisibleTres, setMenuVisibleTres] = useState(false);

    const [menuActual, setMenuActual] = useState('principal');

    const [seleccionadaSeccion, setseleccionadaSeccion] = useState(null);
    const [seleccionadaSeccionDos, setseleccionadaSeccionDos] = useState(null);
    const [seleccionadoItem, setSeleccionadoItem] = useState('');
    const [seleccionadoItemDos, setSeleccionadoItemDos] = useState('');

    const { itemSeleccionado } = useParams();

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const toggleMenuDos = () => {
        setMenuVisibleDos(!menuVisibleDos);
    };

    const toggleMenuTres = () => {
        setMenuVisibleTres(!menuVisibleTres);
    };

    const retrocederMenu = () => {
        if (menuActual === 'terciaria') {
            setMenuActual('secundaria');
        } else if (menuActual === 'secundaria') {
            setMenuActual('principal');
        }
    };
    
    useEffect(() => {
        if (menuVisible || menuVisibleDos || menuVisibleTres) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [menuVisible, menuVisibleDos, menuVisibleTres]);

    useEffect(() => {
        if(itemSeleccionado){
            console.log(`Cargando datos para ${itemSeleccionado}`);
        }
    }, [itemSeleccionado]);

    return (
        <div className={`contenedor-padre-inicio-compra ${menuVisible || menuVisibleDos || menuVisibleTres ? 'overlay-active' : ''}`}>
            {menuVisible && <div className='overlay'></div>}
            {menuVisibleDos && <div className='overlay'></div>}
            {menuVisibleTres && <div className='overlay'></div>}

            <Cabecera
                toggleMenu={toggleMenu}
                toggleMenuDos={toggleMenuDos}
                toggleMenuTres={toggleMenuTres}
            />

            <section className={`contenedor-contenido-menu-hamburguesa-novedades-categoria ${menuVisible ? 'visible' : 'hidden'}`}>
                {menuActual === 'principal' && (
                    <MenuHamburguesaPrincipal
                        toggleMenu={toggleMenu}
                        toggleMenuDos={toggleMenuDos}
                        setseleccionadaSeccion={setseleccionadaSeccion}
                        setMenuActual={setMenuActual}
                        setSeleccionadoItem={setSeleccionadoItem}
                    />
                )}
                {menuActual === 'secundaria' && (
                    <MenuHamburguesaSecundaria
                        toggleMenu={toggleMenu}
                        seleccionadaSeccion={seleccionadaSeccion}
                        setseleccionadaSeccionDos={setseleccionadaSeccionDos}
                        setMenuActual={setMenuActual}
                        retrocederMenu={retrocederMenu}
                        seleccionadoItem={seleccionadoItem}
                        setSeleccionadoItemDos={setSeleccionadoItemDos}
                    />
                )}
                {menuActual === 'terciaria' && (
                    <MenuHamburguesaTerciaria
                        toggleMenu={toggleMenu}
                        seleccionadaSeccionDos={seleccionadaSeccionDos}
                        setMenuActual={setMenuActual}
                        retrocederMenu={retrocederMenu}
                        seleccionadoItem={seleccionadoItem}
                        seleccionadoItemDos={seleccionadoItemDos}
                    />
                )}
            </section>

            <section className={`contenedor-recibir-pedido-compra-recoge-envio-domicilio ${menuVisibleDos ? 'visible' : 'hidden'}`}>
                <RecibirPedidoCompraEnvio toggleMenuDos={toggleMenuDos} />
            </section>

            <section className={`contenedor-cuadro-notificaciones ${menuVisibleTres ? 'visible' : 'hidden'}`}>
                <CuadroNotificaciones toggleMenuTres={toggleMenuTres} />
            </section>

            <div className='contenedor-articulos-compra'>
                <ArticulosCompra/>
            </div>

            <FooterCompleto />

        </div>
    );
}
export default InicioCompra;