import React from 'react'
import { Link } from 'react-router-dom';

function NavbarLinks() {
  return (
    <div class="collapse navbar-collapse justify-content-center sticky-top" id="navbarSupportedContent">
        <a class="navbar-brand" href="#">NextHaedo</a>
        <ul className="navbar-nav">
            <li className="nav-item" id='inicio'>
                <Link className='nav-link' to="/">INICIO</Link>
            </li>
            <li className="nav-item" id='contacto'>
                <Link className='nav-link' to="/contacto">CONTACTO</Link>
            </li>
            <li className="nav-item" id='productos'>
                <Link className='nav-link' to="/productos">PRODUCTOS</Link>
            </li>
            <li className="nav-item" id='nosotros'>
                <Link className='nav-link' to="/nosotros">NOSOTROS</Link>
            </li>
            <li className="nav-item" id='iniciarsesion'>
               { currentUser ? <Link className='nav-link' to="/login">DESCONECTARSE</Link>:<Link className='nav-link' to="/login">CONECTARSE</Link>}
      
            </li>
        </ul>
    </div>
  )
}

export default NavbarLinks