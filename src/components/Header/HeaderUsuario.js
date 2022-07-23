import logo from '../../assets/logo.png';
import '../../style/style.css';
import NavbarUsuario from './NavbarUsuario';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <>
    <header className='Header d-none d-lg-block'>
      <div className="row-logo-contacto">
        <Link to="/">
          <img src={logo} className="logo" alt="NextHaedo. Seguridad Electrónica." />
        </Link>
        <div className='contacto-header'>
          <div className="contacto-linea">
            <div className="icon">📞</div>
            <div className="contacto-texto" id="telefono">(011)5924-0239</div>
          </div>
          <div className="contacto-linea">
            <div className="icon">✉</div>
            <div className="contacto-texto" id='mail'>ventas@nexthaedo.com.ar</div>
          </div>
          <div className="contacto-linea">
            <div className="icon">🚩</div>
            <div className="contacto-texto" id='ubicacion'>Haedo, Buenos Aires, ARG</div>
          </div>
        </div>
      </div>
    </header>
    <NavbarUsuario />
    </>
  );
}

export default Header;
