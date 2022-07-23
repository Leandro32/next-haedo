import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Login from './components/Login/Login';
import Nosotros from './components/Nosotros/Nosotros';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PaginaTodosProductos from './components/Productos/PaginaTodosProductos';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './contextos/AuthContext';
import PaginaProductoIndividual from './components/Productos/Producto/PaginaProductoIndividual'
import Signup from './components/SignUp/SignUp';
import PaginaContacto from './components/Contacto/PaginaContacto';
import PanelUsuario from './components/PanelUsuario/PanelUsuario';
import BotonWhatsapp from './components/BotonWhatsapp/BotonWhatsapp';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter> 
    <AuthProvider>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={
                 <Login />
            } />
        <Route path='/signup' element={  
                <Signup />
            } />
        <Route path='/nosotros' element={
            <>
              <Header />
              <Nosotros />
              <Footer /> 
            </>} />
        <Route path='/contacto' element={
            <>
              <Header />
              <PaginaContacto />
              <Footer /> 
            </>} />
        <Route path='/productos' element={
            <>
              <Header />
              <PaginaTodosProductos />
              <Footer /> 
            </>}/>
        <Route path='/productos/:id' element={
            <>
              <Header />
              <PaginaProductoIndividual />
              <Footer /> 
            </>}/>
        <Route path='/panelusuario' element={
            <>
              <PanelUsuario />
              <Footer />
            </> }/>
      </Routes>
      </AuthProvider>
    </HashRouter>
    <BotonWhatsapp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
