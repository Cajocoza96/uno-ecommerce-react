import React from 'react';
import './css/BotonAgregar.css';

import { HiOutlineShoppingCart } from 'react-icons/hi';

const BotonAgregar = ({ value, onclick }) => {
    return(
        <button className='boton-agregar' onClick={onclick}>
            {value}<HiOutlineShoppingCart className='icono-carrito'/>
        </button>
    );
};

export default BotonAgregar;