import React from 'react';

const BotonEntrar = ({ value, onclick }) => {
    return(
        <button className='boton-entrar' onClick={onclick}>{value}
        </button>
    );
};

export default BotonEntrar;