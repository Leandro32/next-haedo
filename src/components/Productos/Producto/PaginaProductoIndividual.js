import '../../../style/style.css';
import {useParams} from 'react-router-dom'
import listadoProductos from '../Productos'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useLocation } from 'react-router-dom';

function PaginaProductoIndividual(props) {
  const location = useLocation()
  const state = location.state
  const {titulo,categoria,subcategoria,precio,codigo,descripcion,url} = state
  const urlWhatsapp = 'https://wa.me/+541159240239?&text=Buenos%20d%C3%ADas!%20Quer%C3%ADa%20consultarte%20sobre%20el%20producto%20'
  const tituloWhatsapp = titulo.replaceAll(' ', '%20')
  
  return (
    <>
      <div className="container d-flex my-5">
        <div className="imagen col-6 d-flex justify-content-center align-items-center">
          <img src={url} className="imagenProducto" />
        </div>
        <div className="datos col-6 align-middle d-flex align-items-center">
          <div className='my-4'>
            <div className="titulo"><h3>{titulo}</h3></div>
            <div className="d-flex">
              <div className="categoria">{categoria}</div>
              <div className="categoria">{subcategoria}</div>
            </div>
            <div className="codigo mt-3">{codigo}</div>
            <div className="descripcion">{descripcion}</div>
            <div className="precio precioPagina mt-3">${precio}</div>
            <div className='compra-whatsapp mt-4'>
              <a className="btn btn-primary" href={urlWhatsapp + tituloWhatsapp} role="button">
                Segui tu consulta por WhatsApp <FontAwesomeIcon icon={faWhatsapp} size="lg"  />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaginaProductoIndividual;
