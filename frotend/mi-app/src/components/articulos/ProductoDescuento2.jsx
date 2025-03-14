import React, { useState, useEffect } from 'react';
import './css/ProductoDescuento2.css';

import BotonCompra from '../buttons/BotonCompra';

import informacionTecnologia from '../menuHamburguesa/data/categorias/tecnologia/informacionTecnologia.json';

function ProductoDescuento2() {

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
                            marcaDeProducto: subContenido || '', productosInfo: productoSeleccion
                        });
                    }
                }
            }
        }

        const contenidoNeveraHaceb = informacionTecnologia.tecnologia[0].contenido.find(cont => cont.id === 5);

        agregarProducto(contenidoNeveraHaceb, 1, 1);

        setProductos(productoArray);
    }, []);

    const obtenerRutaImagen = (imagen) => `/assets/img/articulosCompra/${imagen}`;

    return (

        <div className='contenedor-padre-producto-descuento2-boton'>

            {productos.map((producto, index) => (
                <div className='contenedor-producto-descuento2-boton' key = {index}>

                    <div className='contenedor-producto-descuento2'>

                        <div className='contenedor-informacion-produc-desc2-padre'>

                            <div className='contenedor-texto-informacion-produc-desc2'>

                                <div className='contenedor-texto-hasta-porcentaje-produc-desc2'>
                                    <p className='texto-hasta'>Hasta</p>
                                    <p className='texto-descuento'>-{producto.productosInfo.porcentajeProductoDescuentoUnitario}%</p>
                                </div>

                                <div className='contenedor-pagando-con-tarjeta-uno-producto-descuento2'>
                                    <p className='texto-pagando'>Pagando con</p>

                                    <div className='contenedor-tarjeta-uno'>
                                        <p className='tarjeta-uno'>Uno</p>
                                    </div>

                                </div>

                                <div className='contenedor-en-marca-producto'>
                                    <p className='texto-marca-de-producto'>{producto.marcaDeProducto.textoMarcaDeProducto1}</p>
                                    <p className='texto-marca-de-producto'>{producto.marcaDeProducto.textoMarcaDeProducto2}</p>
                                </div>

                            </div>

                            <div className='contenedor-imagen-producto-descuento2'>
                                <img className='imagen-producto-descuento2' src={obtenerRutaImagen(producto.productosInfo.imagen)} alt={obtenerRutaImagen(producto.productosInfo.imagen)} />
                            </div>
                        </div>

                    </div>
                    <BotonCompra value='¡Compra ahora!' />
                </div>

            ))}


        </div>
    );
}

export default ProductoDescuento2;