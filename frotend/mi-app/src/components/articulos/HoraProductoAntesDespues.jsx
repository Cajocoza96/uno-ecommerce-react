import React, { useState, useEffect } from 'react';

import './css/HoraProductoAntesDespues.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BotonCompra from '../buttons/BotonCompra';
import HoraActual from './HoraActual';

import informacionBlackFriday from '../menuHamburguesa/data/novedades/blackFriday/informacionBlackFriday.json';
import informacionTecnologia from '../menuHamburguesa/data/categorias/tecnologia/informacionTecnologia.json';

function HoraProductoAntesDespues() {

    const [productos, setProductos] = useState([]);

    const [swiperSettings, setSwiperSettings] = useState({
        spaceBetween: 2,
        slidesPerView: 'auto',
    });

    useEffect(() => {

        const productoArray = [];

        const agregarProducto = (contenido, subContenidoId) => {

            if (contenido) {
                const subContenido = contenido.subContenido.find(sub => sub.id === subContenidoId);

                if (subContenido) {
                    const productoSeleccion = subContenido.productos || [];
                    productoArray.push(...productoSeleccion);

                }
            }

        }

        const contenidoBlackFriday = informacionBlackFriday.blackFriday[0].contenido.find(c => c.id === 1);
        const contenidoTecnologia = informacionTecnologia.tecnologia[0].contenido.find(c => c.id === 1);

        agregarProducto(contenidoBlackFriday, 1);
        agregarProducto(contenidoTecnologia, 2);

        setProductos(productoArray);


        // Detecta el modo landscape con window.matchMedia
        const checkLandscape = () => {
            if (window.matchMedia("(min-width: 320px) and (max-width: 932px) and (orientation: landscape)").matches) {
                setSwiperSettings({
                    spaceBetween: 10,
                    slidesPerView: 2,
                });
            } else if (window.matchMedia("(min-width: 768px) and (max-width: 1366px)").matches) {
                setSwiperSettings({
                    spaceBetween: 10,
                    slidesPerView: 3,
                });
            } else if (window.matchMedia("(min-width: 1367px) and (max-width: 1440px)").matches) {
                setSwiperSettings({
                    spaceBetween: 10,
                    slidesPerView: 3,
                });
            } else if (window.matchMedia("(min-width: 1441px) and (max-width: 1920px)").matches) {
                setSwiperSettings({
                    spaceBetween: 10,
                    slidesPerView: 3,
                });
            } else if (window.matchMedia("(min-width: 1921px) and (max-width: 3840px)").matches) {
                setSwiperSettings({
                    spaceBetween: 10,
                    slidesPerView: 3,
                });
            } else if (window.matchMedia("(min-width: 3841px) and (max-width: 4480px)").matches) {
                setSwiperSettings({
                    spaceBetween: 10,
                    slidesPerView: 5,
                });
            } else if (window.matchMedia("(min-width: 4481px)").matches) {
                setSwiperSettings({
                    spaceBetween: 10,
                    slidesPerView: 5,
                });
            } else {
                setSwiperSettings({
                    spaceBetween: 2,
                    slidesPerView: 'auto',
                });
            }
        };

        checkLandscape(); // Ejecuta al cargar
        window.addEventListener("resize", checkLandscape); // Detecta cambios de tamaño

        return () => {
            window.removeEventListener("resize", checkLandscape); // Limpia el evento al desmontar
        };
    }, []);

    const obtenerRutaImagen = (imagen) => `/assets/img/articulosCompra/${imagen}`;

    return (
        <article className='contenedor-hora-actual-imagen-producto-antes-despues'>

            <HoraActual />

            <Swiper
                spaceBetween={swiperSettings.spaceBetween}
                slidesPerView={swiperSettings.slidesPerView}
                className='swiper-hora-actual-imagen-producto-antes-despues'
            >

                {productos.map((producto, index) => (
                    <SwiperSlide className='swiperSlide-contenedor-imagen-producto-antes-despues' key={index}>

                        <div className='contenedor-imagen-producto-antes-despues'>

                            <div className='contenedor-imagen-antes-desp-tarjeta-producto'>

                                <div className='contenedor-imagen-producto'>
                                    <img className='imagen-producto' src={obtenerRutaImagen(producto.imagen)} alt={obtenerRutaImagen(producto.imagen)} />
                                </div>


                                <div className='contenedor-antes-desp-precOfer-tarj-product'>

                                    {(producto.precioProductoAntesUnitarioPorcentaje) && (
                                        <p className='texto-antes-product'>Antes ${producto.precioProductoAntesUnitarioPorcentaje.toLocaleString("es-CO")}</p>
                                    )}

                                    {(producto.precioProductoUnitarioOtros) && (
                                        <p className='texto-despues-product'>Despues ${producto.precioProductoUnitarioOtros.toLocaleString("es-CO")}</p>
                                    )}

                                    {(producto.precioProductoOfertaUno) && (
                                        <div className='contenedor-pagando-con-tarjeta-uno-hora-antes-despues'>
                                            <p className='texto-tarj-product'>Pagando con tu tarjeta</p>

                                            <div className='contenedor-tarjeta-uno'>
                                                <p className='tarjeta-uno'>Uno</p>
                                            </div>

                                        </div>
                                    )}


                                    {(producto.precioProductoOfertaUno) && (
                                        <p className='texto-precio-oferta-product'>Precio oferta ${producto.precioProductoOfertaUno.toLocaleString("es-CO")}</p>
                                    )}

                                    {(producto.precioProductoUnitario) && (
                                        <p className='texto-precio-unitario'>Precio ${producto.precioProductoUnitario.toLocaleString("es-CO")}</p>
                                    )}

                                </div>

                            </div>

                            <div className='contenedor-texto-detalles-hora-producto-antes-despues'>
                                <p className='texto-detalles-hora-producto-antes-despues'>{producto.detalle1}</p>
                                <p className='texto-detalles-hora-producto-antes-despues'>{producto.detalle2}</p>
                            </div>

                            <BotonCompra value='¡Compra ahora!' />
                        </div>

                    </SwiperSlide>
                ))}

            </Swiper>
        </article>

    );
}

export default HoraProductoAntesDespues;