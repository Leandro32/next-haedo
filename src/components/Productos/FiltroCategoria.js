import React,{useState,useEffect} from "react"
import { Nav } from 'react-bootstrap';
import Categoria from './Categoria'
import { Accordion } from "react-bootstrap";

const FiltroCategoria = ({setListadoProductosMostrar,listadoProductos}) => {
    let [palabraBuscada,setPalabraBuscada] = useState("") 
    let categoriaID = 0
    let arrSubcategoria = []
    let arrCategoria = []
    const categorias = listadoProductos.reduce((categoria,producto) => {
            if(!categoria.includes(producto.categoria))
                {
                        categoria.push(producto.categoria)

                        arrCategoria.push(

                           {
                                categoria:producto.categoria,
                                subcategoria:[]
                           }
                        )

                }
            if(!arrSubcategoria.includes(producto.subcategoria.toLowerCase().trim())){
                
                arrSubcategoria.push(producto.subcategoria.toLowerCase().trim())   
                arrCategoria[arrCategoria.findIndex( x=> x.categoria == producto.categoria)].subcategoria.push(producto.subcategoria)
            }
                        
            return categoria
            }
            ,[])

    const numeritos = categorias.map((algo,index) => index)
    return ( 
        <Accordion className="flex-column col-12 col-sm-3" defaultActiveKeyssssssssssssss={['0']}>
                {arrCategoria.map(({categoria,subcategoria},index) => {
                    return (
                        <>
                        <Accordion.Item eventKey={index}>
                            <Accordion.Header>
                                <Categoria 
                                    palabraBuscada = {palabraBuscada}
                                    setPalabraBuscada = {setPalabraBuscada}
                                    id={numeritos[index]} 
                                    setListadoProductosMostrar={setListadoProductosMostrar} 
                                    listadoProductos={listadoProductos}  
                                    name={categoria} >
                                </Categoria>
                            </Accordion.Header>
                            <Accordion.Body>
                                {subcategoria.map(nombre =>
                                {
                                    return (<Categoria
                                        palabraBuscada = {palabraBuscada}
                                        setPalabraBuscada = {setPalabraBuscada}
                                        id={numeritos[index]} 
                                        setListadoProductosMostrar={setListadoProductosMostrar} 
                                        listadoProductos={listadoProductos}  
                                        name={nombre} >
                                    </Categoria>)
                                }
                                    )}
                                
                            </Accordion.Body>
                        </Accordion.Item>       
                        </>
                        )                    
                    })
                }
        </Accordion> 
    )
}

export default FiltroCategoria