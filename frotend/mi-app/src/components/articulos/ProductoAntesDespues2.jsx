import React, { useState, useEffect } from 'react';

import './css/ProductoAntesDespues2.css';

import BotonCompra from '../buttons/BotonCompra';

import informacionTecnologia from '../menuHamburguesa/data/categorias/tecnologia/informacionTecnologia.json';

function ProductoAntesDespues2() {

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
                            productoInfo: productoSeleccion
                        });
                    }
                }
            }
        }

        const contenidoTelevisorSamsungNeoQLED = informacionTecnologia.tecnologia[0].contenido.find(cont => cont.id === 4);

        agregarProducto(contenidoTelevisorSamsungNeoQLED, 1, 3);

        setProductos(productoArray);

    }, []);

    const obtenerRutaImagen = (imagen) => `/assets/img/articulosCompra/${imagen}`;

    return (
        <div className='contenedor-padre-producto-antes-despues-boton2'>

            {productos.map((producto, index) => (
                <article className='contenedor-producto-antes-despues-boton2'>

                    <div className='contenedor-producto-antes-despues2' key = {index}>

                        <div className='contenedor-imagen-producto-antes-despues2'>

                            <div className='contenedor-imagen-produc-ant-desp2'>
                                <img className='imagen-produc-ant-desp2' src={obtenerRutaImagen(producto.productoInfo.imagen)} alt={obtenerRutaImagen(producto.productoInfo.imagen)} />
                            </div>

                            <div className='contenedor-producto-info-antes-despues2'>

                                <div className='contenedor-antes-despues-produc-antes-despues-2'>
                                    <p className='texto-antes2'>Antes ${producto.productoInfo.precioProductoAntesUnitarioPorcentaje.toLocaleString("es-CO")}</p>
                                    <p className='texto-despues2'>Despues ${producto.productoInfo.precioProductoUnitarioOtros.toLocaleString("es-CO")}</p>
                                </div>


                                <div className='contenedor-pagando-con-tarjeta-uno-prod-antes-despues-2'>
                                    <p className='texto-pagando-tarjeta2'>Pagando con tarjeta</p>

                                    <div className='contenedor-tarjeta-uno'>
                                        <p className='tarjeta-uno'>Uno</p>
                                    </div>

                                </div>

                                <div className='contenedor-precio-oferta-texto-producto-detalle-antes-despues'>
                                    <p className='texto-precio-oferta2'>Precio oferta ${producto.productoInfo.precioProductoOfertaUno.toLocaleString("es-CO")}</p>

                                    <div className='contenedor-texto-producto-detalles-antes-despues'>
                                        <p className='texto-producto-detalles2'>{producto.productoInfo.detalle1}</p>
                                        <p className='texto-producto-detalles2'>{producto.productoInfo.detalle2}</p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <BotonCompra value='¡Compra ahora!' />

                </article>
            ))}

        </div>

    );
}
export default ProductoAntesDespues2;