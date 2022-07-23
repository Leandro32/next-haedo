import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../../assets/navbarlogo.png'
import { useAuth } from '../../contextos/AuthContext';
import PreciosGremio from '../PreciosGremio/PreciosGremio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faVideoCamera, faUserGroup, faUser, faRightToBracket} from '@fortawesome/free-solid-svg-icons';

function NavbarNH() {
  const {currentUser,logOut} = useAuth()
  const navigate = useNavigate()
  async function handleLogOut(){
    await logOut()
  }  
  return (
    <Navbar sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='d-lg-none'>
          <Link to="/">
            <img src={logo} height="45px" alt="NextHaedo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav w-75 d-flex justify-content-evenly" className='position-relative'>
          <Nav className="mx-auto">
            <PreciosGremio />
            
            {currentUser? 
              <Nav.Link id='botonMargen' className="derecho">
                <Link onClick={handleLogOut} className='nav-link' id='link-header' to="/">Desconectarse</Link>
              </Nav.Link>
              :<Nav.Link id='botonMargen' className='derecho d-flex'>
                <FontAwesomeIcon icon={faRightToBracket} className='align-self-center pr-4' inverse/>
                <Link className='nav-link fontTitulo' to="/login">Registrarse</Link>
              </Nav.Link>
            }
            <Nav.Link id='inicio' className='d-flex'>
              <FontAwesomeIcon icon={faHome} className='align-self-center' inverse/>
              <Link className='nav-link' id='link-header' to="/">Inicio</Link>
            </Nav.Link>
            <Nav.Link id='contacto' className='d-flex'>
              <FontAwesomeIcon icon={faPhone} className='align-self-center' inverse/>
              <Link className='nav-link' id='link-header' to="/contacto">Contacto</Link>
            </Nav.Link>
            <Nav.Link id='productos' className='d-flex'>
              <FontAwesomeIcon icon={faVideoCamera} className='align-self-center' inverse/>
              <Link className='nav-link' id='link-header' to="/productos">Productos</Link>
            </Nav.Link>
            <Nav.Link id='nosotros' className='d-flex'>
              <FontAwesomeIcon icon={faUserGroup} className='align-self-center' inverse/>
              <Link className='nav-link' id='link-header' to="/nosotros">Nosotros</Link>
            </Nav.Link>
            {/* {currentUser?
              <Nav.Link id='panelUsuario'>
                <Link className='nav-link fontTitulo' id='link-header' to="/panelusuario">Panel de Usuario</Link>
            {currentUser?
              <Nav.Link id='panelUsuario' className='d-flex'>
                <FontAwesomeIcon icon={faUser} className='align-self-center' inverse/>
                <Link className='nav-link' id='link-header' to="/panelusuario">Panel de Usuario</Link>
              </Nav.Link>:
            ""} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarNH