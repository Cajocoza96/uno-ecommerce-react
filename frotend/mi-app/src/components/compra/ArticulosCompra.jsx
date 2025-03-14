import React, { useState, useEffect } from 'react';

import { useLocation, useNavigate, useParams } from 'react-router-dom';

import informacionBlackFriday from '../menuHamburguesa/data/novedades/blackFriday/informacionBlackFriday.json';
import informacionMercado from '../menuHamburguesa/data/categorias/mercado/informacionMercado.json';
import informacionVinosYLicores from '../menuHamburguesa/data/categorias/vinosYLicores/informacionVinosYLicores.json';
import informacionTecnologia from '../menuHamburguesa/data/categorias/tecnologia/informacionTecnologia.json';

import './css/ArticulosCompra.css';

import { FaPlus, FaMinus, FaChevronLeft, FaChevronDown, FaThLarge, FaBars } from 'react-icons/fa';

import BotonAgregar from '../buttons/BotonAgregar';

function ArticulosCompra({ itemSeleccionado: itemDesdeProps }) {

    const { state } = useLocation();
    const [productos, setProductos] = useState([]);

    const { itemSeleccionado: itemDesdeParams } = useParams();

    const [itemSeleccionado, setItemSeleccionado] = useState(itemDesdeProps || state?.itemSeleccionado || itemDesdeParams || "");

    const [mostrarMas, setMostrarMas] = useState(false);
    const [menuDesplegado, setMenuDesplegado] = useState(false);
    const [opcionSeleccionado, setOpcionSeleccionado] = useState('');
    const [textosInfoSeleccionados, setTextosInfoSeleccionados] = useState({});
    const [itemPadre, setItemPadre] = useState("");

    const [tituloItemSeleccionado, setTituloItemSeleccionado] = useState("");
    const [tituloItemPadre, setTituloItemPadre] = useState("");

    const [iconoOrganizarFila, setIconoOrganizarFila] = useState(true);

    const opciones = [
        'Mayor precio', 'Menor precio', 'Mas vendidos', 'Productos de la A-Z',
        'Productos de la Z-A', 'Mas recientes', 'Descuento', 'Relevancia'
    ]

    const archivosJsonCombinados = [
        ...informacionBlackFriday.blackFriday,
        ...informacionMercado.mercado,
        ...informacionVinosYLicores.vinosYLicores,
        ...informacionTecnologia.tecnologia
    ]

    const seleccionarOpcion = (opcion) => {
        setOpcionSeleccionado(opcion);
        setMenuDesplegado(false);
    }

    const obtenerItemPadre = () => {
        for (const contenido of archivosJsonCombinados) {
            if (contenido.contenido) {
                for (const subContenido of contenido.contenido) {
                    if (subContenido.subContenido) {
                        const encontradoEnSubcontenido = subContenido.subContenido.find((sub) => sub.item1 === itemSeleccionado);

                        if (encontradoEnSubcontenido) {
                            return subContenido.item1;
                        }
                    }
                }
                const encontradoEnContenido = contenido.contenido.find((sub) => sub.item1 === itemSeleccionado);

                if (encontradoEnContenido) {
                    return contenido.item1;
                }
            }
        }
        return "";
    };


    const obtenerDatosItem = (item) => {
        for (const contenido of archivosJsonCombinados) {
            if (contenido.item1 === item) return contenido;

            for (const subContenido of contenido.contenido || []) {
                if (subContenido.item1 === item) return subContenido;

                for (const sub of subContenido.subContenido || []) {
                    if (sub.item1 === item) return sub;
                }
            }
        }
        return null;
    };

    useEffect(() => {
        if (itemSeleccionado) {
            const datosItem = obtenerDatosItem(itemSeleccionado);

            if (datosItem) {
                setTituloItemSeleccionado(datosItem.titulo1);
                setProductos(datosItem.productos || []);

                for (const contenido of archivosJsonCombinados) {
                    for (const subContenido of contenido.contenido || []) {
                        if (subContenido.subContenido?.some(sub => sub.item1 === itemSeleccionado)) {
                            setItemPadre(subContenido.item1);
                            setTituloItemPadre(subContenido.titulo1);
                            return;
                        }
                    }
                    if (contenido.contenido?.some(sub => sub.item1 === itemSeleccionado)) {
                        setItemPadre(contenido.item1);
                        setTituloItemPadre(contenido.titulo1);
                        return;
                    }
                }
                setItemPadre("");
                setTituloItemPadre("");
            }
        }
    }, [itemSeleccionado]);

    const navigate = useNavigate();

    const handleNavigation = (item) => {
        navigate(`/${item}`, { state: { itemSeleccionado: item } });
        setItemSeleccionado(item);
    }

    const obtenerTodosLosProductos = (nombreObjetoPrincipal) => {
        let productosAcumulados = [];

        archivosJsonCombinados.forEach((contenido) => {
            if (contenido.item1 === nombreObjetoPrincipal && contenido.contenido) {
                contenido.contenido.forEach((subContenido) => {
                    if (subContenido.productos) {
                        productosAcumulados = [...productosAcumulados, ...subContenido.productos];
                    }
                    if (subContenido.subContenido) {
                        subContenido.subContenido.forEach((sub) => {
                            if (sub.productos) {
                                productosAcumulados = [...productosAcumulados, ...sub.productos];
                            }
                        });
                    }
                });
            }
        });
        return productosAcumulados;
    }

    const obtenerProductosDeSubcontenidos = (itemSeleccionado) => {
        let productosAcumulados = [];

        archivosJsonCombinados.forEach((contenido) => {
            if (contenido.contenido) {
                contenido.contenido.forEach((subContenido) => {
                    if (subContenido.item1 === itemSeleccionado && subContenido.subContenido) {
                        subContenido.subContenido.forEach((sub) => {
                            if (sub.productos) {
                                productosAcumulados = [...productosAcumulados, ...sub.productos];
                            }
                        });
                    }
                });
            }
        });
        return productosAcumulados;
    };

    useEffect(() => {
        if (itemSeleccionado) {
            const resultadoSubContenido = archivosJsonCombinados
                .flatMap((contenido) => contenido.contenido || [])
                .flatMap((subContenido) => subContenido.subContenido || [])
                .find((subContenido) => subContenido.item1 === itemSeleccionado);

            const resultadoContenido = archivosJsonCombinados
                .flatMap((contenido) => contenido.contenido || [])
                .find((contenido) => contenido.item1 === itemSeleccionado);

            const resultado = resultadoSubContenido || resultadoContenido;

            if (resultado) {
                const productosDeSubcontenidos = obtenerProductosDeSubcontenidos(itemSeleccionado);
                setProductos(productosDeSubcontenidos.length > 0 ? productosDeSubcontenidos : resultado.productos || []);
                setTextosInfoSeleccionados({
                    textoInfo1: resultado.textoInfo1,
                    textoInfo2: resultado.textoInfo2,
                    textoInfo3: resultado.textoInfo3,
                    textoInfo4: resultado.textoInfo4,
                    textoInfo5: resultado.textoInfo5,
                    textoInfo6: resultado.textoInfo6,
                    textoInfo7: resultado.textoInfo7,
                    textoInfo8: resultado.textoInfo8,
                    textoInfo9: resultado.textoInfo9
                });

                setItemPadre(obtenerItemPadre());
            } else {
                const resultadoPrincipal = archivosJsonCombinados.find((contenido) => contenido.item1 === itemSeleccionado);

                if (resultadoPrincipal) {
                    const productosDelNivelPrincipal = obtenerTodosLosProductos(itemSeleccionado);
                    setProductos(productosDelNivelPrincipal);
                    setTextosInfoSeleccionados({
                        textoInfo1: resultadoPrincipal.textoInfo1,
                        textoInfo2: resultadoPrincipal.textoInfo2,
                        textoInfo3: resultadoPrincipal.textoInfo3,
                        textoInfo4: resultadoPrincipal.textoInfo4,
                        textoInfo5: resultadoPrincipal.textoInfo5,
                        textoInfo6: resultadoPrincipal.textoInfo6,
                        textoInfo7: resultadoPrincipal.textoInfo7,
                        textoInfo8: resultadoPrincipal.textoInfo8,
                        textoInfo9: resultadoPrincipal.textoInfo9
                    });

                    setItemPadre("");
                }
            }
        }
    }, [itemSeleccionado]);


    useEffect(() => {
        if (state?.itemSeleccionado) {
            setItemSeleccionado(state.itemSeleccionado);
        }
    }, [state?.itemSeleccionado]);


    const obtenerRutaImagen = (imagen) => `/assets/img/articulosCompra/${imagen}`;

    return (
        <div className='contenedor-padre-articulos-compra'>

            <div className='contenedor-titulo-mensaje-promocion-icono-mostrar-regresar'>

                <div className='contenedor-titulo-item1-mensaje-promocion'>
                    <p className='texto-titulo-item1'>{tituloItemSeleccionado}</p>

                    <div className='contenedor-mensaje-promocion-item1'>
                        <p className='texto-mensaje-promocion-item1'>
                            {textosInfoSeleccionados.textoInfo1}
                        </p>
                        {mostrarMas && (
                            <div className='contenedor-texto-oculto-visto'>
                                <p className='texto-mensaje-promocion-item1'>
                                    {textosInfoSeleccionados.textoInfo2}
                                </p>
                                <p className='texto-mensaje-promocion-item1'>
                                    {textosInfoSeleccionados.textoInfo3}
                                </p>
                                <p className='texto-mensaje-promocion-item1'>
                                    {textosInfoSeleccionados.textoInfo4}
                                </p>
                                <p className='texto-mensaje-promocion-item1'>
                                    {textosInfoSeleccionados.textoInfo5}
                                </p>
                                <p className='texto-mensaje-promocion-item1'>
                                    {textosInfoSeleccionados.textoInfo6}
                                </p>
                                <p className='texto-mensaje-promocion-item1'>
                                    {textosInfoSeleccionados.textoInfo7}
                                </p>
                                <p className='texto-mensaje-promocion-item1'>
                                    {textosInfoSeleccionados.textoInfo8}
                                </p>
                                <p className='texto-mensaje-promocion-item1'>
                                    {textosInfoSeleccionados.textoInfo9}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <div className='contenedor-mostrar-menos-mas-icono-menos-mas'
                    onClick={() => setMostrarMas(!mostrarMas)}
                >
                    {mostrarMas ? <p className='texto-mostrar'>Mostrar menos</p>
                        : <p className='texto-mostrar'>Mostrar mas</p>}

                    <div className='contenedor-icono-mas-menos'>
                        {mostrarMas ? <FaPlus className='icono-mas' /> : <FaMinus className='icono-menos' />}
                    </div>
                </div>

                <div className='contenedor-padre-icono-expansion-izquierda-regresar'>

                    <div className='contenedor-icono-expansion-izquierda-regresar'>
                        <FaChevronLeft className='icono-expansion-izquierda' />
                        <p className='texto-regresar' onClick={() => handleNavigation(itemPadre)}>{tituloItemPadre || "Inicio"}</p>
                    </div>

                </div>

            </div>

            <div className='contenedor-filtrar-ordenar-por-icono-expansion-abajo-fila-columna'>

                <p className='texto-filtrar'>Filtrar</p>

                <div
                    className='contenedor-ordenar-por-icono-expansion'
                    onClick={() => setMenuDesplegado(!menuDesplegado)}
                >

                    <div className='contenedor-ordenar-por-tipo-orden-icono-expansion-abajo'>
                        <div className='contenedor-ordenar-por-tipo-orden'>
                            <p className='texto-ordenar-por'>Ordenar por</p>
                            <p className='texto-tipo-de-orden'>{opcionSeleccionado || 'Relevancia'}</p>
                        </div>

                        <FaChevronDown className='icono-expansion-abajo' />
                    </div>

                    {menuDesplegado && (
                        <ul className='menu-desplegable'>
                            {opciones.map((opcion, index) => (
                                <li
                                    key={index}
                                    className='opcion-menu-desplegable'
                                    onClick={() => seleccionarOpcion(opcion)}
                                >
                                    {opcion}
                                </li>
                            ))}

                        </ul>
                    )}

                </div>

                <div className='contenedor-icono-ver-fila-columna'>
                    <FaThLarge
                        className={`icono-organizar-como-fila ${iconoOrganizarFila ? 'negro' : ''}`}
                        onClick={() => setIconoOrganizarFila(true)}
                        onMouseOver={() => setIconoOrganizarFila(true)}
                    />

                    <FaBars className={`icono-organizar-como-columna ${!iconoOrganizarFila ? 'negro' : ''}`}
                        onClick={() => setIconoOrganizarFila(false)}
                        onMouseOver={() => setIconoOrganizarFila(false)}
                    />

                </div>

            </div>

            <div className='contenedor-cantidad-resultados-productos-obtenidos'>
                <p className='texto-cantidad-productos-obtenidos'>{productos.length}</p>
                <p className='texto-resultados-productos-obtenidos'>resultados</p>
            </div>


            <div className={`contenedor-productos-unitarios ${iconoOrganizarFila ? 'negro' : ''}`}>

                {productos.map((producto) => (
                    <div key={producto.id} className={`contenedor-producto-unitario ${iconoOrganizarFila ? 'negro' : ''}`}>

                        <div className='contenedor-imagen-vendido-por-producto-unitario'>

                            <div className='contenedor-imagen-producto-unitario'>
                                <img
                                    src={obtenerRutaImagen(producto.imagen)}
                                    className='imagen-producto-unitario'
                                />
                            </div>

                            <p className='texto-vendido-por'><span className='negrita'>Vendido por: </span>{producto.vendidoPor}</p>

                        </div>


                        <div className='contenedor-detalles-boton-agregar-producto-unitario'>

                            <div className='contenedor-detalles-producto-unitario'>
                                <p className='nombre-producto-unitario'>
                                    {producto.nombreProductoUnitario}
                                </p>
                                {(producto.marcaProductoUnitario) && (
                                    <p className='marca-producto-unitario'>{producto.marcaProductoUnitario}</p>
                                )}
                                {(producto.unidadPrecioProductoUnitario) && (
                                    <p className='unidad-precio-producto-unitario'>{producto.unidadPrecioProductoUnitario}</p>
                                )}
                                {(producto.porcentajeProductoDescuentoUnitario && producto.precioProductoAntesUnitarioPorcentaje) && (
                                    <div className='contenedor-porcentaje-producto-descuento-unitario-antes-unitario'>

                                        <div className='contenedor-porcentaje-producto-descuento-unitario'>
                                            <p className='porcentaje-producto-descuento-unitario'>-{producto.porcentajeProductoDescuentoUnitario}%</p>
                                        </div>

                                        <p className='precio-producto-antes-unitario-porcentaje'>${producto.precioProductoAntesUnitarioPorcentaje.toLocaleString("es-CO")}</p>
                                    </div>
                                )}

                                {(producto.precioProductoOfertaUno) && (
                                    <div className='contenedor-producto-oferta-uno-tarjeta-uno-unitario'>

                                        <div className='contenedor-producto-oferta-uno-unitario'>
                                            <p className='producto-oferta-uno-unitario'>${producto.precioProductoOfertaUno.toLocaleString("es-CO")}</p>
                                        </div>

                                        <div className='contenedor-tarjeta-uno'>
                                            <p className='tarjeta-uno'>Uno</p>
                                        </div>

                                    </div>
                                )}

                                {(producto.precioProductoUnitarioOtros) && (
                                    <div className='contenedor-producto-unitario-otros-texto-otros'>

                                        <div className='contenedor-producto-unitario-otros'>
                                            <p className='producto-unitario-otros'>${producto.precioProductoUnitarioOtros.toLocaleString("es-CO")}</p>
                                        </div>

                                        <div className='contenedor-forma-pago-otros'>
                                            <p className='forma-pago-otros'>Otros</p>
                                        </div>
                                    </div>
                                )}

                                {(producto.precioProductoAntesUnitario) && (
                                    <p className='precio-producto-antes-unitario'>${producto.precioProductoAntesUnitario.toLocaleString("es-CO")}</p>
                                )}

                                {(producto.precioProductoUnitario) && (
                                    <p className='precio-producto-unitario'>${producto.precioProductoUnitario.toLocaleString("es-CO")}</p>
                                )}

                            </div>

                            <BotonAgregar value='Agregar' />
                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}
export default ArticulosCompra;