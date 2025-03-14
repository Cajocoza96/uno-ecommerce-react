import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './css/ProductoDescuentoDefinitivoPagos.css';

import BotonAgregar from '../buttons/BotonAgregar';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function ProductoDescuentoDefinitivoPagos() {

    const [productos, setProductos] = ([]);

    useEffect(() => {

    }, [])


    return (
        <article className='contenedor-prod-desc-defi-pagos-boton-agregar'>

            <Swiper
                spaceBetween={15}
                slidesPerView={'auto'}
                className='swiper-prod-desc-defi-pagos-boton-agregar'
            >

                {productos.map((producto) => (
                    <SwiperSlide className='swiperSlide-contenedor-prod-desc-defi-pago' key={producto.id}>

                    <div className='contenedor-imagen-prod-defi'>
                        <img className='imagen-prod-defi' src={producto.imagen} alt={producto.imagen} />
                    </div>

                    <div className='contenedor-detalles-prod-defi'>

                        <p className='texto-detalles-prod-defi'>
                            {producto.detalle1}<br />
                            {producto.detalle2}<br />
                            <span className='texto-marca-prod-defi'>{producto.marca}</span>
                        </p>


                        <div className='contenedor-desc-defi-pagos'>

                            <div className='contenedor-descuento-precio-antes'>

                                <div className='contenedor-descuento'>
                                    <p className='texto-descuento'>{producto.descuento}</p>
                                </div>

                                <p className='texto-precio-antes'>{producto.antes}</p>

                            </div>


                            <div className='contenedor-descuento-tarjeta-uno'>
                                <p className='texto-precio'>{producto.precioUno}</p>
                                <span className='tarjeta-uno'>Uno</span>
                            </div>

                            <div className='contenedor-descuento-tarjeta-mastercard'>
                                <p className='texto-precio'>{producto.precioMastercard}</p>
                                <span className='tarjeta-mastercard'><span className='rojo'></span><span className='amarillo'></span></span>
                            </div>

                            <div className='contenedor-descuento-otro'>
                                <p className='texto-precio-otro'>{producto.otroPrecio}</p>
                                <p className='texto-precio-otro'>Otros</p>
                            </div>

                        </div>

                        <div className='contenedor-boton-agregar'>
                            <p className='texto-vendido-por-empresa'>Vendido por: Exito</p>
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