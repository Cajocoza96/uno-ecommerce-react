import React, { useState } from 'react';

import './css/RecibirPedidoCompraEnvio.css';

import { FaBriefcase, FaTruck, FaChevronDown, FaTimes } from 'react-icons/fa';

import BotonConfirmar from '../buttons/BotonConfirmar';

function RecibirPedidoCompraEnvio({ toggleMenuDos }) {
    const [compraRecoge, setCompraRecoge] = useState(true);

    const [inputValor, setInputValor] = useState("");
    const [menuDespegableVisible, setMenuDespegableVisible] = useState(false);

    const opciones = ['Armenia', 'Barranquilla', 'Bello', 'Bogota, D.c.', 'Bucaramanga', 'Buenaventura (Valle del Cauca)', 'Cali',
        'Cartagena de indias', 'Caucasia', 'Chia', 'Cucuta', 'Duitama', 'Envigado', 'Florencia (Caqueta)', 'Fusagusuga',
        'Girardot', 'Granada (Cundinamarca)', 'Granada (Meta)', 'Ibague', 'Itagui', 'Jamundi', 'La Ceja', 'Lorica',
        'Manizales', 'Medellin', 'Monteria', 'Mosquera', 'Neiva', 'Palmira', 'Pasto', 'Pereira', 'Pitalito (Huila)',
        'Popayan', 'Puerto Berrio (Antioquia)', 'Puerto Gaitan (Meta)', 'Riohacha (Guajira)', 'Rionegro', 'Sabaneta',
        'San Andres', 'San Jeronimo', 'San Pedro de los Milagros', 'Santa Marta', 'Sincelejo', 'Soacha', 'Tulua',
        'Tunja', 'Turbaco (Bolivar)', 'Turbo', 'Valledupar', 'Villavicencio', 'Zipaquira'];

    const handleInputChange = (event) => {
        setInputValor(event.target.value);
        setMenuDespegableVisible(true);
    };

    const handleOptionSelect = (opcion) => {
        setInputValor(opcion);
        setMenuDespegableVisible(false);
    };

    const filteredOptions = opciones.filter((opcion) =>
        opcion.toLowerCase().includes(inputValor.toLowerCase())
    );

    const [inputValorDos, setInputValorDos] = useState("");
    const [menuDespegableVisibleDos, setMenuDespegableVisibleDos] = useState(false);

    const opcionesDos = ['D1', 'Ara', 'Olimpica', 'Exito'];

    const handleInputChangeDos = (event) => {
        setInputValorDos(event.target.value);
        setMenuDespegableVisibleDos(true);
    };

    const handleOptionSelectDos = (opcionDos) => {
        setInputValorDos(opcionDos);
        setMenuDespegableVisibleDos(false);
    };

    const filteredOptionsDos = opcionesDos.filter((opcionDos) =>
        opcionDos.toLowerCase().includes(inputValorDos.toLowerCase())
    );

    return (
        <div className='contenedor-recibir-pedido-compra-envio-domicilio'>

            <div className='contenedor-recibir-pedido-icono-cerrar'>

                <p className='titulo-recibir-pedido'>¿Como quieres recibir tu pedido?</p>
                <FaTimes className='icono-cerrar'
                    onClick={() => {
                        toggleMenuDos();
                        setCompraRecoge(true);
                        setInputValor('');
                        setInputValorDos('');
                        setMenuDespegableVisible(false);
                        setMenuDespegableVisibleDos(false);
                    }}
                />

            </div>

            <div className='opciones'>
                <div className={`opcion ${compraRecoge ? 'activo' : ''}`}
                    onClick={() => setCompraRecoge(true)}
                    onMouseOver={() => setCompraRecoge(true)}>
                    <FaBriefcase className={`icono-maletin ${compraRecoge ? 'blanco' : ''}`} />

                    <div className={`contenedor-compra-recoge-sin-costo ${compraRecoge ? 'blanco' : ''}`}>
                        <p className='primer-texto'>Compra y recoge</p>
                        <p className='segundo-texto'>Sin costo</p>
                    </div>

                </div>

                <div className={`opcion ${!compraRecoge ? 'activo' : ''}`}
                    onClick={() => setCompraRecoge(false)}
                    onMouseOver={() => setCompraRecoge(false)}>

                    <div className={`contenedor-envio-domicilio ${!compraRecoge ? 'blanco' : ''}`}>
                        <FaTruck className={`icono-camion ${!compraRecoge ? 'blanco' : ''}`} />
                        <p className='primer-texto'>Envia a domicilio</p>
                    </div>

                </div>

                <div
                    className={`indicador ${compraRecoge ? 'izquierda' : 'derecha'}`}
                ></div>
            </div>

            <div className='contenedor-formulario-recibir-pedido-compra-envio-domicilio'>

                {compraRecoge ? (
                    <div className='formulario'>

                        <div className='contenedor-titulo-formulario'>
                            <p className='texto-titulo-formulario'>Selecciona la ciudad y almacen para</p>
                            <p className='texto-titulo-formulario'>recoger tu pedido</p>
                        </div>

                        <div className='contenedor-formulario-ciudad'>

                            <div className='contenedor-label-input'>
                                <label htmlFor='label' className='label'>Ciudad</label>

                                <div className='contenedor-input-icono-expansion-abajo'>
                                    <input
                                        className='input'
                                        type='text'
                                        value={inputValor}
                                        onChange={handleInputChange}
                                        onFocus={() => setMenuDespegableVisible(true)} // Muestra el dropdown al enfocar
                                        placeholder='Selecciona una opcion'
                                    />

                                    <FaChevronDown className='icono-expansion-abajo' onClick={() => setMenuDespegableVisible(!menuDespegableVisible)}></FaChevronDown>
                                </div>

                            </div>
                            {menuDespegableVisible && filteredOptions.length > 0 && (
                                <ul className='ul'>
                                    {filteredOptions.map((opcion, index) => (
                                        <li
                                            className='li'
                                            key={index}
                                            onClick={() => handleOptionSelect(opcion)}
                                            onMouseDown={(e) => e.preventDefault()}
                                        >
                                            {opcion}
                                        </li>
                                    ))}
                                </ul>
                            )}

                        </div>


                        <div className='contenedor-formulario-Almacen'>

                            <div className='contenedor-label-input'>
                                <label htmlFor='label' className='label'>Almacen</label>

                                <div className='contenedor-input-icono-expansion-abajo'>
                                    <input
                                        className='input'
                                        type='text'
                                        value={inputValorDos}
                                        onChange={handleInputChangeDos}
                                        onFocus={() => setMenuDespegableVisibleDos(true)} // Muestra el dropdown al enfocar
                                        placeholder='Selecciona una opcion'
                                    />

                                    <FaChevronDown className='icono-expansion-abajo' onClick={() => setMenuDespegableVisibleDos(!menuDespegableVisibleDos)}></FaChevronDown>
                                </div>

                            </div>
                            {menuDespegableVisibleDos && filteredOptionsDos.length > 0 && (
                                <ul className='ul'>
                                    {filteredOptionsDos.map((opcionDos, index) => (
                                        <li
                                            className='li'
                                            key={index}
                                            onClick={() => handleOptionSelectDos(opcionDos)}
                                            onMouseDown={(e) => e.preventDefault()}
                                        >
                                            {opcionDos}
                                        </li>
                                    ))}
                                </ul>
                            )}

                        </div>

                        <BotonConfirmar value='Confirmar'></BotonConfirmar>

                    </div>

                ) : (
                    <div className='formulario'>

                        <div className='contenedor-titulo-formulario'>
                            <p className='texto-titulo-formulario'>Ingresa tu correo para ver tus direcciones</p>
                            <p className='texto-titulo-formulario'>guardadas o agregar una nueva</p>
                        </div>


                        <div className='contenedor-label-input'>
                            <label htmlFor='label' className='label'>Ingresa tu correo</label>

                            <div className='contenedor-input-icono-expansion-abajo'>
                                <input
                                    className='input'
                                    type='email'
                                    placeholder='cuenta@correo.com'
                                />
                            </div>

                        </div>

                        <BotonConfirmar value='Confirmar'></BotonConfirmar>

                    </div>

                )}


            </div>

        </div>

    );

}

export default RecibirPedidoCompraEnvio;