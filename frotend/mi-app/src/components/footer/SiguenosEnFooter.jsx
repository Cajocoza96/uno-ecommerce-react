import React from 'react';

import './css/SiguenosEnFooter.css';

import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'; 

function SiguenosEnFooter() {
    return (
        <article className='contenedor-siguenos-en-redes-sociales-footer'>

            <p className='texto-siguenos-en'>Siguenos en:</p>

            <div className='contenedor-redes-sociales'>
                <FaFacebook className='icono-facebook' />
                <FaInstagram className='icono-instagram'/>
                <FaTiktok className='icono-tiktok' />
                <FaTwitter className='icono-twitter' />
            </div>


        </article>
    );
}

export default SiguenosEnFooter;