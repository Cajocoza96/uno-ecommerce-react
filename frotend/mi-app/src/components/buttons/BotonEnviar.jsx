import React from 'react';

const BotonEnviar = ({ value, onclick }) => {
    return(
        <button className='boton-enviar' onClick={onclick}>{value}
        </button>
    );
};

export default BotonEnviar;