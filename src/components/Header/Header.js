import logo from '../../assets/logo.png';
import '../../style/style.css';
import NavbarNH from './NavbarNH';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
    <header className='Header container d-none d-lg-block mb-3'>
      <div className="row-logo-contacto">
        <Link to="/">
          <img src={logo} className="logo" alt="NextHaedo. Seguridad Electrónica." />
        </Link>
        <div className='contacto-header'>
          <div className="contacto-linea">
            <FontAwesomeIcon icon={faPhone} size="lg" className='align-self-center icon' />
            <div className="contacto-texto" id="telefono">(011)5924-0239</div>
          </div>
          <div className="contacto-linea">
            <FontAwesomeIcon icon={faEnvelope} size="lg" className='align-self-center icon' />
            <div className="contacto-texto" id='mail'>ventas@nexthaedo.com.ar</div>
          </div>
          <div className="contacto-linea">
            <FontAwesomeIcon icon={faLocationDot} size="lg" className='align-self-center icon' />
            <div className="contacto-texto" id='ubicacion'>Haedo, Buenos Aires, ARG</div>
          </div>
        </div>
      </div>
    </header>
    <NavbarNH />
    </>
  );
}

export default Header;
