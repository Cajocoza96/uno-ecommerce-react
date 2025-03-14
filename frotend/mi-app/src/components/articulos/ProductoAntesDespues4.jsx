import React, { useState, useEffect } from 'react';

import './css/ProductoAntesDespues4.css';

import informacionBlackFriday from '../menuHamburguesa/data/novedades/blackFriday/informacionBlackFriday.json';

function ProductoAntesDespues4() {
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
                            tituloEvento: informacionBlackFriday.blackFriday[0].titulo1 || '', productoInfo: productoSeleccion
                        });
                    }
                }
            }
        };

        const contenidoAudioYVideo = informacionBlackFriday.blackFriday[0].contenido.find(cont => cont.id === 1);

        agregarProducto(contenidoAudioYVideo, 2, 1);

        setProductos(productoArray);

    }, []);

    const obtenerRutaImagen = (imagen) => `/assets/img/articulosCompra/${imagen}`;

    return (

        <div className='contenedor-padre-imagen-producto-antes-despues4'>

            {productos.map((producto, index) => (
                <div className='contenedor-imagen-producto-antes-despues4' key = {index}>

                    <div className='contenedor-imagen-produc-ant-desp4'>
                        <img className='imagen-produc-ant-desp4' src={obtenerRutaImagen(producto.productoInfo.imagen)} alt={obtenerRutaImagen(producto.productoInfo.imagen)} />
                    </div>


                    <div className='contenedor-event-prom-prod-info-ant-desp4'>

                        <div className='contenedor-event-prom4'>
                            <p className='texto-evento-promocion4'>{producto.tituloEvento}</p>
                        </div>

                        <div className='contenedor-producto-info-antes-despues4'>
                            <div className='contenedor-texto-producto-info-antes-despues4'>
                                
                                <div className='contenedor-texto-antes-despues-prod-ante-desp-4'>
                                    <p className='texto-antes4'>Antes ${producto.productoInfo.precioProductoAntesUnitarioPorcentaje.toLocaleString("es-CO")}</p>
                                    <p className='texto-despues4'>Despues ${producto.productoInfo.precioProductoUnitario.toLocaleString("es-CO")}</p>
                                </div>
                                
                                <p className='texto-porcentaje-prod-ante-desp-4'>-{producto.productoInfo.porcentajeProductoDescuentoUnitario}%</p>

                                <div className='contenedor-texto-detalles-prod-ante-desp-4'>
                                    <p className='texto-detalles-prod-ante-desp-4'>{producto.productoInfo.detalle1}</p>
                                    <p className='texto-detalles-prod-ante-desp-4'>{producto.productoInfo.detalle2}</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            ))}

        </div>

    );
}
export default ProductoAntesDespues4;