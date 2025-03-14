import React, { useState, useEffect } from 'react';

import './css/ProductoDescuentoDefinitivoPagos.css';

import BotonAgregar from '../buttons/BotonAgregar';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import informacionMercado from '../menuHamburguesa/data/categorias/mercado/informacionMercado.json';

function ProductoDescuentoDefinitivoPagos() {

    const [productos, setProductos] = useState([]);

    const [swiperSettings, setSwiperSettings] = useState({
        spaceBetween: 2,
        slidesPerView: 'auto',
    });

    useEffect(() => {
        const agregarProducto = (contenido, subContenidoid) => {
            if (contenido) {
                const subContenido = contenido.subContenido.find(sub => sub.id === subContenidoid);

                if (subContenido) {
                    const productoSeleccion = subContenido.productos || '';

                    if (productoSeleccion) {
                        setProductos(productoSeleccion);
                    }
                }
            }
        };

        const contenidoFrutas = informacionMercado.mercado[0].contenido.find(cont => cont.id === 2);

        agregarProducto(contenidoFrutas, 1);

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
        <article className='contenedor-prod-desc-defi-pagos-boton-agregar'>

            <Swiper
                spaceBetween={swiperSettings.spaceBetween}
                slidesPerView={swiperSettings.slidesPerView}
                className='swiper-prod-desc-defi-pagos-boton-agregar'
            >

                {productos.map((producto, index) => (
                    <SwiperSlide className='swiperSlide-contenedor-prod-desc-defi-pago' key={index}>

                        <div className='contenedor-imagen-prod-defi'>
                            <img className='imagen-prod-defi' src={obtenerRutaImagen(producto.imagen)} alt={obtenerRutaImagen(producto.imagen)} />
                        </div>

                        <div className='contenedor-detalles-desc-antes-precio-tarjeta-prod-defi-padre'>

                            <div className='contenedor-texto-detalles-marca-prod-defi'>

                                {(producto.detalle1) && (
                                    <div className='contenedor-texto-detalles-prod-defi'>
                                        <p className='texto-detalles-prod-defi'>{producto.detalle1}</p>
                                    </div>
                                )}

                                {(producto.marca) && (
                                    <p className='texto-marca-prod-defi'>{producto.marca}</p>
                                )}

                            </div>


                            <div className='contenedor-desc-defi-pagos'>

                                {(producto.porcentajeProductoDescuentoUnitario &&
                                    producto.precioProductoAntesUnitarioPorcentaje) && (
                                        <div className='contenedor-precio-antes-pago-defini'>
                                            <p className='texto-descuento'>-{producto.porcentajeProductoDescuentoUnitario}%</p>
                                            <p className='texto-precio-antes'>${producto.precioProductoAntesUnitarioPorcentaje.toLocaleString("es-CO")}</p>
                                        </div>
                                    )}


                                {(producto.precioUno) && (
                                    <div className='contenedor-precio-tarjeta-uno'>
                                        <p className='texto-precio-tarjeta-uno'>${producto.precioUno.toLocaleString("es-CO")}</p>

                                        <div className='contenedor-tarjeta-uno'>
                                            <p className='tarjeta-uno'>Uno</p>
                                        </div>
                                    </div>
                                )}

                                {(producto.precioMastercard) && (
                                    <div className='contenedor-precio-tarjeta-mastercard'>
                                        <p className='texto-precio-tarjeta-mastercard'>${producto.precioMastercard.toLocaleString("es-CO")}</p>

                                        <div className='contenedor-tarjeta-mastercard'>
                                            <div className='contenedor-amarillo'></div>
                                            <div className='contenedor-rojo'></div>
                                        </div>

                                    </div>
                                )}

                                {(producto.otroPrecio) && (
                                    <div className='contenedor-descuento-otro'>
                                        <p className='texto-precio-otro'>${producto.otroPrecio.toLocaleString("es-CO")}</p>
                                        <p className='texto-precio-otro'>Otros</p>
                                    </div>
                                )}

                                {(producto.precioProductoUnitario) && (
                                    <div className='contenedor-texto-precio-unitario'>
                                        <p className='texto-precio-unitario-prod-defi'>Precio</p>
                                        <p className='texto-precio-unitario-prod-defi'>${producto.precioProductoUnitario.toLocaleString("es-CO")}</p>
                                    </div>
                                )}

                            </div>

                            <div className='contenedor-boton-agregar'>
                                <p className='texto-vendido-por-empresa'>Vendido por: {producto.vendidoPor}</p>
                                <BotonAgregar value='Agregar' />
                            </div>

                        </div>

                    </SwiperSlide>
                ))}

            </Swiper>
        </article>
    );
}

export default ProductoDescuentoDefinitivoPagos;