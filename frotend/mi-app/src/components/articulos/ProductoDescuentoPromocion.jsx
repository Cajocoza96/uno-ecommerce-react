import React, { useEffect, useState } from 'react';
import './css/ProductoDescuentoPromocion.css';

import BotonCompra from '../buttons/BotonCompra';

import informacionBlackFriday from '../menuHamburguesa/data/novedades/blackFriday/informacionBlackFriday.json';

function ProductoDescuentoPromocion() {

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
                            tipoEvento: informacionBlackFriday.blackFriday[0].titulo1 || '', productosInfo: productoSeleccion
                        });
                    }
                }
            }

        };

        const contenidoCalzado = informacionBlackFriday.blackFriday[0].contenido.find(cont => cont.id === 3);

        agregarProducto(contenidoCalzado, 4, 1);

        setProductos(productoArray);

    }, []);

    const obtenerRutaImagen = (imagen) => `/assets/img/articulosCompra/${imagen}`;
    return (
        <article className='contenedor-producto-descuento-promocion-boton-padre'>
            {productos.map((producto, index) => (
                <div className='contenedor-producto-descuento-promocion-boton' key={index}>

                    <div className='contenedor-producto-descuento-promocion'>

                        <div className='contenedor-imagen-producto-desc-promo'>
                            <img className='imagen-producto-desc-promo' src={obtenerRutaImagen(producto.productosInfo.imagen)} alt={obtenerRutaImagen(producto.productosInfo.imagen)} />
                        </div>

                        <div className='contenedor-descuento-tarjeta-producto-padre'>

                            <div className='contenedor-descuento-tarjeta-producto'>
                                <p className='texto-descuento'>{producto.productosInfo.porcentajeProductoDescuentoUnitario}%</p>

                                <div className='contenedor-pagando-con-tu-tarjeta-uno'>
                                    <p className='texto-pagando-con'>Pagando con tu tarjeta</p>

                                    <div className='contenedor-tarjeta-uno'>
                                        <p className='tarjeta-uno'>Uno</p>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className='contenedor-info-evento-promocion-categ-prod'>

                            <div className='contenedor-info-evento'>
                                <p className='texto-info-evento'>{producto.tipoEvento}</p>
                            </div>

                            <p className='texto-favorito'>En los favoritos</p>

                            <div className='contenedor-info-promocion'>
                                <p className='texto-info-promocion'>{producto.productosInfo.nombreCorto}</p>
                            </div>

                        </div>

                    </div>

                    <BotonCompra value='¡Compra ahora!' />
                </div>
            ))}

        </article>
    );
}

export default ProductoDescuentoPromocion;