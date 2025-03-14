import React, { useState, useEffect } from 'react';

import './css/ProductoAntesDespues3.css';

import BotonCompra from '../buttons/BotonCompra';

import informacionBlackFriday from '../menuHamburguesa/data/novedades/blackFriday/informacionBlackFriday.json';

function ProductoAntesDespues3() {
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
                            infoEvento: informacionBlackFriday.blackFriday[0] || '',
                            productoInfo: productoSeleccion
                        })
                    }
                }
            }
        }

        const contenidoLaptopAsusVivobook = informacionBlackFriday.blackFriday[0].contenido.find(cont => cont.id === 1);

        agregarProducto(contenidoLaptopAsusVivobook, 1, 3);
        setProductos(productoArray);

    }, []);

    const obtenerRutaImagen = (imagen) => `/assets/img/articulosCompra/${imagen}`;

    return (
        <div className='contedor-padre-producto-antes-despues-boton3'>

            {productos.map((producto, index) => (
                <article className='contenedor-producto-antes-despues-boton3' key={index}>

                    <div className='contenedor-producto-antes-despues3'>

                        <div className='contenedor-imagen-producto-antes-despues3'>

                            <div className='contenedor-imagen-produc-ant-desp3'>
                                <img className='imagen-produc-ant-desp3' src={obtenerRutaImagen(producto.productoInfo.imagen)} alt={obtenerRutaImagen(producto.productoInfo.imagen)} />
                            </div>


                            <div className='contenedor-event-prom-prod-info-ant-desp3'>

                                <div className='contenedor-event-prom3'>
                                    <p className='texto-evento-promocion3'>{producto.infoEvento.titulo1}</p>
                                </div>

                                <div className='contenedor-producto-info-antes-despues3'>

                                    <div className='contenedor-texto-producto-info-antes-despues3'>
                                        <p className='texto-antes3'>Antes ${producto.productoInfo.precioProductoAntesUnitarioPorcentaje.toLocaleString("es-CO")}</p>
                                        <p className='texto-despues3'>Despues ${producto.productoInfo.precioProductoUnitarioOtros.toLocaleString("es-CO")}</p>
                                    </div>

                                    <div className='contenedor-pagando-con-tarjeta-uno'>
                                        <p className='texto-pagando-tarjeta3'>Pagando con</p>

                                        <div className='contenedor-tarjeta-uno'>
                                            <p className='tarjeta-uno'>Uno</p>
                                        </div>

                                    </div>

                                    <p className='texto-precio-oferta3'>Precio oferta ${producto.productoInfo.precioProductoOfertaUno.toLocaleString("es-CO")}</p>

                                    <div className='contenedor-detalles-producto-ante-desp-3'>
                                        <p className='texto-producto-detalles3'>{producto.productoInfo.detalle1}</p>
                                        <p className='texto-producto-detalles3'>{producto.productoInfo.detalle2}</p>
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
export default ProductoAntesDespues3;