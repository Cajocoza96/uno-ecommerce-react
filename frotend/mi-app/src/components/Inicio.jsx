import React, { useState, useEffect } from 'react';

import './Inicio.css';

import Cabecera from './cabecera/Cabecera';
import ProductoAntesDespuesDoble from './articulos/ProductoAntesDespuesDoble';
import ProductoDescuento from './articulos/ProductoDescuento';
import HoraProductoAntesDespues from './articulos/HoraProductoAntesDespues';
import ProductoDescuentoPromocion from './articulos/ProductoDescuentoPromocion';
import ProductoDescuento2 from './articulos/ProductoDescuento2';
import ProductoAntesDespues2 from './articulos/ProductoAntesDespues2';
import TituloEventoCompra from './articulos/TituloEventoCompra';
import ProductoAntesDespues3 from './articulos/ProductoAntesDespues3';
import ProductoAntesDespuesDoble2 from './articulos/ProductoAntesDespuesDoble2';
import TituloLoMejorCategoria from './articulos/TituloLoMejorCategoria';
import ProductoAntesDespues4 from './articulos/ProductoAntesDespues4';
import ProductoDescuentoDefinitivoPagos from './articulos/ProductoDescuentoDefinitivoPagos';
import TituloEstrenoUltimoProducto from './articulos/TituloEstrenoUltimoProducto';

import MenuHamburguesaPrincipal from './menuHamburguesa/MenuHamburguesaPrincipal';
import MenuHamburguesaSecundaria from './menuHamburguesa/MenuHamburguesaSecundaria';
import MenuHamburguesaTerciaria from './menuHamburguesa/MenuHamburguesaTerciaria';

import RecibirPedidoCompraEnvio from './articulos/RecibirPedidoCompraEnvio';

import CuadroNotificaciones from './articulos/CuadroNotificaciones';

import FooterCompleto from './footer/FooterCompleto';

function Inicio() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuVisibleDos, setMenuVisibleDos] = useState(false);
    const [menuVisibleTres, setMenuVisibleTres] = useState(false);

    const [menuActual, setMenuActual] = useState('principal');

    const [seleccionadaSeccion, setseleccionadaSeccion] = useState(null);
    const [seleccionadaSeccionDos, setseleccionadaSeccionDos] = useState(null);
    const [seleccionadoItem, setSeleccionadoItem] = useState('');
    const [seleccionadoItemDos, setSeleccionadoItemDos] = useState('');

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


    return (

        <div className={`contenedor-padre ${menuVisible || menuVisibleDos || menuVisibleTres ? 'overlay-active' : ''}`}>
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

            <section className='contenedor-compra-antDes-desc-producto'>
                <ProductoAntesDespuesDoble />
                <ProductoDescuento />
            </section>

            <section className='contenedor-hora-producto-antes-despues-varios'>
                <HoraProductoAntesDespues />
            </section>

            <section className='contenedor-prod-desc-prom-desc-product2-antes-despues2'>
                <ProductoDescuentoPromocion />
                <ProductoDescuento2 />
                <ProductoAntesDespues2 />
            </section>

            <section className='contenedor-evento-compra-tarjeta-opcional'>
                <TituloEventoCompra />
                <ProductoAntesDespues3 />
                <TituloEstrenoUltimoProducto />
                <ProductoAntesDespuesDoble2 />
            </section>

            <section className='contenedor-lo-mejor-categoria-producto-descuento-definitivo-pagos'>
                <TituloLoMejorCategoria />
                <ProductoAntesDespues4 />
                <ProductoDescuentoDefinitivoPagos />
            </section>

            <section className={`contenedor-recibir-pedido-compra-recoge-envio-domicilio ${menuVisibleDos ? 'visible' : 'hidden'}`}>
                <RecibirPedidoCompraEnvio toggleMenuDos={toggleMenuDos} />
            </section>

            <section className={`contenedor-cuadro-notificaciones ${menuVisibleTres ? 'visible' : 'hidden'}`}>
                <CuadroNotificaciones toggleMenuTres={toggleMenuTres} />
            </section>

            <FooterCompleto />
        </div>

    );
}

export default Inicio;