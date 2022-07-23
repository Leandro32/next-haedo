import React from 'react'
import { Pagination } from 'react-bootstrap'

const Paginado = ({listadoProductosMostrar,setPaginaActual}) => {
     const paginaFinal = Math.ceil(listadoProductosMostrar.length/12)
     const pageNumbers = []
     for(let i =1 ; i<=paginaFinal; i++){
        pageNumbers.push(i)
        }
        
        const handleClick = (number) =>{
            setPaginaActual(number)
        }
    return (
    <nav>
        <ul className='pagination my-5 justify-content-center'>
            <Pagination.First  onClick={()=> handleClick(1)}/>
            {
                pageNumbers.map(number =>
                    <Pagination.Item key={number} onClick={()=> handleClick(number)}>
                        {number}</Pagination.Item>
                        // Agregar pagina activa
                    )
            }
            <Pagination.Last onClick={()=> handleClick(paginaFinal)}/>
        </ul>
    </nav>
    )
}

export default Paginado