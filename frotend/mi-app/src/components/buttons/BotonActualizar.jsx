import React from 'react';

const BotonActualizar = ({ value, onclick }) => {
    return(
        <button className='boton-actualizar' onClick={onclick}>{value}
        </button>
    );
};

export default BotonActualizar;