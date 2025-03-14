import React, { useState, useEffect } from 'react';
import './css/HoraActual.css';

const HoraActual = () => {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setHora(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return(
        <div className='contenedor-hora-actual'>
            <p className='hora-actual'>{hora}</p>
        </div>
    );
}

export default HoraActual;