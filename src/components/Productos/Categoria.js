import React,{useState,useEffect} from "react"
import { Nav } from 'react-bootstrap';

const Categoria = ({setListadoProductosMostrar,listadoProductos,name,id,palabraBuscada,setPalabraBuscada}) => {

    const handleClick = ()  => {
        if(palabraBuscada == name && palabraBuscada !=""){
            setPalabraBuscada("")
            buscador("")
            return 
        }
        setPalabraBuscada(name)
        buscador(name)
    }
    const buscador = (palabraABuscar) => {
        palabraABuscar = palabraABuscar.toLowerCase()
        if(palabraABuscar !== ""){
            let productosFiltrados = listadoProductos.filter((elemento) => { 
                return ( 
                    elemento.categoria.toLowerCase().includes(palabraABuscar) || 
                    elemento.subcategoria.toLowerCase().includes(palabraABuscar)
                )
            })
            setListadoProductosMostrar(productosFiltrados)
            return
        }
        setListadoProductosMostrar(listadoProductos)
    }

    return (
            <Nav.Link onClick={()=> handleClick(name)} >{name.toUpperCase()}</Nav.Link>     
    )
}

export default Categoria