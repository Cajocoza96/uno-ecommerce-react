import React from 'react';

const BotonCompra = ({ value, onclick }) => {
    return(
        <button className='boton-compra' onClick={onclick}>{value}
        </button>
    );
};

export default BotonCompra;