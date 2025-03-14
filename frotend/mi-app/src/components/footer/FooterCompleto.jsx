import React from 'react';

import './css/FooterCompleto.css';

import ContenidoExtraFooter from './ContenidoExtraFooter';
import InformacionPlataformaExtraFooter from './InformacionPlataformaExtraFooter';
import ActualizaDatosFooter from './ActualizaDatosFooter';
import SiguenosEnFooter from './SiguenosEnFooter';
import DerechosReservadosFooter from './DerechosReservadosFooter';

function FooterCompleto(){
    return(
        <footer className='contenedor-footer-completo'>
            <ContenidoExtraFooter/>
            <InformacionPlataformaExtraFooter/>
            <ActualizaDatosFooter/>
            <SiguenosEnFooter/>
            <DerechosReservadosFooter/>
        </footer>
    );
}

export default FooterCompleto;