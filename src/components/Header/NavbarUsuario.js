import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../../assets/navbarlogo.png'

function NavbarNH() {
  return (
    <Navbar sticky="top" className='mt-2' expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='d-lg-none'>
          <img src={logo} height="45px" alt="NextHaedo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link id='inicio'><Link className='nav-link' id='link-header' to="/">Inicio</Link></Nav.Link>
            <Nav.Link id='contacto'><Link className='nav-link' id='link-header' to="/contacto">Contacto</Link></Nav.Link>
            <Nav.Link id='productos'><Link className='nav-link' id='link-header' to="/productos">Productos</Link></Nav.Link>
            <Nav.Link id='nosotros'><Link className='nav-link' id='link-header' to="/nosotros">Nosotros</Link></Nav.Link>
            <Nav.Link id='panelUsuario'><Link className='nav-link' id='link-header' to="/panelusuario">Panel de Usuario</Link></Nav.Link>
            <Nav.Link id='cerrarSesion'><Link className='nav-link' id='link-header' to="/desconectarse">Desconectarse</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarNH