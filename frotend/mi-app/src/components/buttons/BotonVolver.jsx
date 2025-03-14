import React from 'react';

const BotonVolver = ({ value, onclick }) => {
    return(
        <button className='boton-volver' onClick={onclick}>{value}
        </button>
    );
};

export default BotonVolver;