import React from 'react';
import BotonActualizar from '../buttons/BotonActualizar';

import './css/ActualizaDatosFooter.css';

function ActualizaDatosFooter() {
    return (
        <article className='contenedor-actualizar-beneficios-boton-footer'>

            <div className='contenedor-actualizar-beneficios'>
                <p className='texto-actualizar-datos'>Actualiza tus datos:</p>
                <p className='texto-descubrir-beneficios'>Y descubre todos los beneficios para ti</p>
            </div>

            <BotonActualizar value='¡Actualizar!' />
            
        </article>
    );
}

export default ActualizaDatosFooter;