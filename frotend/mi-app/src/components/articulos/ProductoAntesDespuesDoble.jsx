import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './css/ProductoAntesDespuesDoble.css';

import { Navigation, Pagination } from 'swiper/modules';

import BotonCompra from '../buttons/BotonCompra';

import informacionTecnologia from '../menuHamburguesa/data/categorias/tecnologia/informacionTecnologia.json'

function ProductoAntesDespuesDoble() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const contenidoTecnologia = informacionTecnologia.tecnologia[0].contenido.find((contenido) => contenido.id === 4);

        if (contenidoTecnologia) {
            const productosSubContenido = contenidoTecnologia.subContenido.flatMap((subContenido) => subContenido.productos || []);
            setProductos(productosSubContenido);
        }

    }, []);

    const obtenerRutaImagen = (imagen) => `/assets/img/articulosCompra/${imagen}`;

    return (
        <article className='contenedor-producto-antes-despues-doble-boton-1'>
            <div className='burbuja'></div>
            <div className='burbuja'></div>
            <div className='burbuja'></div>
            <div className='burbuja'></div>
            <div className='burbuja'></div>
            <Swiper
                spaceBetween={5}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className='swiper-producto-antes-despues-doble'>

                {productos.map((producto) => (
                    <SwiperSlide className='swiperSlide-contenedor-product-antDes-doble-precOfer' key={producto.id}>

                        <div className='contenedor-producto-antes-despues-doble-1'>

                            <div className='contenedor-antes-despues-tarjeta-oferta-detalles-1'>
                                {(producto.precioProductoAntesUnitarioPorcentaje && producto.precioProductoUnitarioOtros) && (
                                    <div className='contenedor-antes-desp-productos-antes-despues-doble-1'>
                                        <p className='texto-antes-product'> Antes ${producto.precioProductoAntesUnitarioPorcentaje.toLocaleString("es-CO")}</p>
                                        <p className='texto-despues-product'> Despues ${producto.precioProductoUnitarioOtros.toLocaleString("es-CO")}</p>
                                    </div>
                                )}

                                {(producto.precioProductoOfertaUno) && (
                                    <div className='contenedor-tarjeta-uno-precio-oferta-productos-antes-despues-doble-1'>

                                        <div className='contenedor-pagando-con-tu-tarjeta-uno'>

                                            <p className='texto-tarj-product'> Pagando con tu tarjeta</p>

                                            <div className='contenedor-tarjeta-uno'>
                                                <p className='tarjeta-uno'>Uno</p>
                                            </div>

                                        </div>

                                        <div className='contenedor-precio-oferta'>
                                            <p className='texto-precio-oferta'>Precio oferta</p>
                                            <p className='texto-precio-oferta'>${producto.precioProductoOfertaUno.toLocaleString("es-CO")}</p>
                                        </div>

                                    </div>
                                )}

                                {(producto.precioProductoUnitario) && (
                                    <div className='contenedor-precio-unitario-productos-antes-despues-doble-1'>
                                        <p className='texto-precio-unitario'>Precio</p>
                                        <p className='texto-precio-unitario'>${producto.precioProductoUnitario.toLocaleString("es-CO")}</p>
                                    </div>
                                )}

                                <div className='contenedor-detalles-productos-antes-despues-doble-1'>
                                    <p className='texto-detalle1-productos-antes-despues-doble-1'>{producto.detalle1}</p>
                                    <p className='texto-detalle1-productos-antes-despues-doble-1'>{producto.detalle2}</p>
                                </div>

                            </div>


                            <div className='contenedor-imagen-producto-antes-despues-doble'>
                                <img className='imagen-producto-antes-despues-doble' src={obtenerRutaImagen(producto.imagen)} alt={producto.detalle} />
                            </div>

                        </div>

                    </SwiperSlide>
                ))}

            </Swiper>

            <BotonCompra value='¡Compra ahora!' />

        </article>
    );
}

export default ProductoAntesDespuesDoble;
