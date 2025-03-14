import React from 'react';

const BotonConfirmar = ({ value, onclick }) => {
    return(
        <button className='boton-confirmar' onClick={onclick}>{value}
        </button>
    );
};

export default BotonConfirmar;