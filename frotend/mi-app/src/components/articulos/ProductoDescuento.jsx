import React, { useState, useEffect } from 'react';

import './css/ProductoDescuento.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from 'swiper/modules';

import BotonCompra from '../buttons/BotonCompra';

import informacionVinosYLicores from '../menuHamburguesa/data/categorias/vinosYLicores/informacionVinosYLicores.json';

import TrianguloFusionInfinito from '../fondo-animados/TrianguloFusionInfinito';

function ProductoDescuento() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const productoArray = [];

        const agregarProducto = (contenido, subContenidoId, productoId) => {
            if (contenido) {
                const subContenido = contenido.subContenido.find(sub => sub.id === subContenidoId);

                if (subContenido) {
                    const productoSeleccion = subContenido.productos.find(prod => prod.id === productoId);

                    if (productoSeleccion) {
                        productoArray.push({
                            productoSimilares: subContenido.productoSimilares || '', productosInfo: productoSeleccion
                        });
                    }
                }
            }
        };

        const contenidoOldParr = informacionVinosYLicores.vinosYLicores[0].contenido.find(c => c.id === 1);
        const contenidoCervezaNacional = informacionVinosYLicores.vinosYLicores[0].contenido.find(c => c.id === 3);
        const contenidoVinoTinto = informacionVinosYLicores.vinosYLicores[0].contenido.find(c => c.id === 4);

        agregarProducto(contenidoOldParr, 2, 2);
        agregarProducto(contenidoCervezaNacional, 1, 1);
        agregarProducto(contenidoVinoTinto, 1, 1);

        setProductos(productoArray);

    }, []);

    const obtenerRutaImagen = (imagen) => `/assets/img/articulosCompra/${imagen}`;

    return (
        <article className='contenedor-producto-descuento-1'>
            <TrianguloFusionInfinito />
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation
                modules={[Navigation]}
                className='swiper-producto-descuento'>

                {productos.map((producto, index) => (
                    <SwiperSlide className='swiperSlide-contenedor-producto-desc-similares-boton' key={index}>

                        <div className='contenedor-producto-desc-similares'>

                            <div className='contenedor-descuento-imagen-producto'>

                                <div className='contenedor-texto-hasta-porcentaje-descuento'>
                                    <p className='texto-hasta-descuento'>Hasta</p>
                                    <p className='texto-porcentaje'>-{producto.productosInfo.porcentajeProductoDescuentoUnitario}%</p>
                                    <p className='texto-hasta-descuento'>de dcto</p>
                                </div>


                                <div className='contenedor-imagen-descuento-producto'>
                                    <img className='imagen-descuento-producto' src={obtenerRutaImagen(producto.productosInfo.imagen)} alt={obtenerRutaImagen(producto.productosInfo.imagen)} />
                                </div>

                            </div>


                            <div className='contenedor-producto-similares-envio-gratis-precio'>

                                <p className='texto-producto-similares-mas'>
                                    {producto.productoSimilares}
                                </p>

                                <div className='contenedor-envio-gratis-precio'>
                                    <p className='texto-envio-gratis'>Envío gratis !</p>
                                    <p className='texto-por-compras-de'>Por compra de</p>
                                    <p className='texto-por-compras-de'>${producto.productosInfo.precioProductoUnitario.toLocaleString("es-CO")}</p>
                                    <p className='texto-con-tarjeta'>con tarjeta</p>

                                    <div className='contenedor-tarjeta-uno'>
                                        <p className='tarjeta-uno'>Uno</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <BotonCompra value='¡Compra ahora!' />

                    </SwiperSlide>
                ))}

            </Swiper>

        </article>

    );
}

export default ProductoDescuento;
