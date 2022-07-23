import React from 'react'

function Direccion() {
  return (
    <>
        <h2>Dirección</h2>
        <p>Las siguientes direcciones se utilizarán por defecto en la página de pago.</p>
        <div className='row'>
            <div className="input-group mb-3 col">
                <h4>Dirección de facturación</h4>
                <div>
                    <input type="text" className="form-control fill" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </div>
            <div className="input-group mb-3 col">
                <h4>Dirección de envío</h4>
                <div>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Direccion