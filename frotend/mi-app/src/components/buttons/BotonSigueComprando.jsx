import React from 'react';

const BotonSigueComprando = ({ value, onclick }) => {
    return(
        <button className='boton-sigue-comprando' onClick={onclick}>{value}
        </button>
    );
};

export default BotonSigueComprando;