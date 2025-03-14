import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Inicio from '../Inicio';
import AutenticacionCrearCuenta from '../autenticacion/AutenticacionCrearCuenta';
import AutenticacionIniciarSeccion from '../autenticacion/AutenticacionIniciarSeccion';
import CuadroCompra from '../compra/CuadroCompra';
import InicioCompra from '../compra/InicioCompra';

function Rutas() {
    return (
        <Routes>
            <Route path='/' element={<Inicio />}></Route>
            <Route path='/crear-cuenta' element={<AutenticacionCrearCuenta />}></Route>
            <Route path='/iniciar-seccion' element={<AutenticacionIniciarSeccion />}></Route>
            <Route path='/cuadro-compra' element={<CuadroCompra />}></Route>

            <Route path='/:itemSeleccionado' element={<InicioCompra />}></Route>
        </Routes>
    );
}
export default Rutas;