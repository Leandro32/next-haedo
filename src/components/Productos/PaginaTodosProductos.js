import '../../style/style.css';
import React,{useState,useEffect} from "react"
import {ref,orderByChild,query,onValue} from "firebase/database";
import {db} from '../firebaseConfig/index.js'
import {Link} from 'react-router-dom'

import Producto from './Producto/Producto'
// import PaginaProducto from './Producto/PaginaProducto';
import Searcher from '../Searcher/Searcher'
import Paginado from './Paginado';
import FiltroCategoria from './FiltroCategoria'

function Productos() {
  const [listadoProductosMostrar,setListadoProductosMostrar]=useState([])
  const [listadoProductos,setListadoProductos]=useState([])
  const [paginaActual,setPaginaActual] = useState(1)
  const [activeID,setActiveID] = useState()


  useEffect(() => {

      const referenciainicial = ref(db,'1hz7q6qfT_fzc0xLLJGghmYDh_C1Rjg73Fc44VMcbqAA/Hoja 1')
      const limitRef = query(referenciainicial)
      const lastQuery = query(limitRef,orderByChild('id'))
      onValue(lastQuery,
          snapshot=>{
            let resultado = []
            snapshot.forEach((producto)=>{
              resultado.push(producto.val())
            })
            resultado.sort((a,b)=>{
              if(b.destacado == 0 ) return -1 
              return a.destacado < b.destacado ? 1 : -1 
              
          })
            setListadoProductos(resultado)
            setListadoProductosMostrar(resultado)
          }
        )
    },[]);

    const indexInicioProducto = (paginaActual-1)*12
    const indexFinalProducto = indexInicioProducto+12
    const pagina = listadoProductosMostrar.slice(indexInicioProducto,indexFinalProducto)
    
  return (
    <div className="container">
      <div className="productos-busqueda d-flex flex-wrap mt-5">
        <h2 className='linea Subrayado'>NUESTROS PRODUCTOS</h2>
        <div className="">
            <Searcher setActiveID={setActiveID} setListadoProductosMostrar={setListadoProductosMostrar} listadoProductos={listadoProductos}/>
        </div>
      </div>
      <div className='row'>
        <FiltroCategoria  activeID={activeID} setActiveID={setActiveID} setListadoProductosMostrar={setListadoProductosMostrar} listadoProductos={listadoProductos}/>

        <div className="productos col-12 col-sm-9">
          <div className="productos-row">
            {
                    listadoProductosMostrar == 0 && <h5>No hay resultados de esa busqueda</h5>
            }
            {
            pagina.map(producto =>
              <Link to={'/productos/' + producto.id} state={
                {
                  key:producto.id,
                  titulo:producto.titulo, 
                  categoria:producto.categoria, 
                  subcategoria:producto.subcategoria,
                  precio:producto.precio,
                  codigo:producto.codigo,
                  destacado : producto.destacado,
                  url : producto.url,
                  descripcion : producto.descripcion,
              }
              }>
                <Producto 
                key={producto.id}
                titulo={producto.titulo} 
                categoria={producto.categoria} 
                subcategoria={producto.subcategoria}
                precio={producto.precio}
                codigo={producto.codigo}
                destacado = {producto.destacado}
                url = {producto.url}
                descripcion = {producto.descripcion}
                />
              </Link>
            )
          }
          </div>
        </div>
        <Paginado setPaginaActual={setPaginaActual} listadoProductosMostrar={listadoProductosMostrar} />
      </div>
    </div>
  );
}

export default Productos;