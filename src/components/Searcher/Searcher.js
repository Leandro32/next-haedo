
import React from "react"
import {Dropdown, DropdownButton} from 'react-bootstrap'
function Searcher(props){
    const setListadoProductosMostrar = props.setListadoProductosMostrar
    const listadoProductos = props.listadoProductos

    const buscador = (event) => {
        let palabraBuscada = event.target.value.toLowerCase()
        props.setActiveID("")
        if(palabraBuscada !== ""){
            let productosFiltrados = listadoProductos.filter((elemento) => { return ( elemento.titulo.toLowerCase().includes(palabraBuscada) ||
                                                                        elemento.categoria.toLowerCase().includes(palabraBuscada) || 
                                                                        elemento.subcategoria.toLowerCase().includes(palabraBuscada)) ||
                                                                        elemento.codigo.toLowerCase().includes(palabraBuscada)
                                                                    })
            setListadoProductosMostrar(productosFiltrados)
            return
        }
        setListadoProductosMostrar(listadoProductos)
    }

    return(
      <div className="input-group mb-3">
        <input onChange={buscador} 
              type="text" 
              className="form-control searchTerm dark" 
              placeholder="Buscar"
              id="buscador"></input>
        <button className="btn btn-dark" type="button" id="button-addon2">
          <i className="fa fa-search"></i>
        </button>
      </div> 
    )
}

export default Searcher