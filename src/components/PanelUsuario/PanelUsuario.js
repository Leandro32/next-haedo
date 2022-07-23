import React from 'react'
import Header from '../Header/Header'
import './panelUsuario.css'
import DetallesCuenta from './DetallesCuenta'

function PanelUsuario() {
  return (
    <>
      <Header />
          <div className="row container mx-auto mt-5 d-flex justify-content-center">
              <div className='col-12 col-md-8 align-self-center'>
                  <DetallesCuenta/>
              </div>
      </div>
    </>
  )
}

export default PanelUsuario