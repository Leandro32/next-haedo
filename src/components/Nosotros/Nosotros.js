import '../../style/style.css';
import './style/nosotros.css';
import Contacto from '../Contacto/Contacto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachographDigital } from '@fortawesome/free-solid-svg-icons';
import Mapa from './Mapa';

function Nosotros() {
  return (
    <>
    <div className='container'>
      <div className="d-flex flex-column flex-md-row justify-content-start align-items-center mt-5">
          <FontAwesomeIcon icon={faTachographDigital} className="d-flex" id="iconTacograph"/> 
          <h1 className='align-middle text-center text-md-start mt-sm-5'>Nosotros</h1>
        </div>
      <div className="row mt-3">
        <p className='text-center text-md-start col-12 col-md-6 mt-3'>Somos NextHaedo. Ubicado en Avenida Rivadavia 16180.  Distribuidores oficiales de Dahua Technology, marca destacada mundialmente por su tecnología e innovación en vigilancia y seguridad. Somos una negocio joven de espíritu emprendedor en constante crecimiento.</p>
        <p className='text-center text-md-start col-12 col-md-6 mt-3'>Abocados a proveer soluciones y satisfacer las necesidades de cada cliente que solicite nuestros servicios, ya sea en la venta y distribución a través de todo el país como en la instalación de sistemas de monitoreo que permitan brindar tranquilidad en su hogar o comercio.</p>
      </div>
      <div className="row mt-5">
        <div className="text-center text-md-start col-12 col-md-6">
          <h2 className='text-center'>Visión</h2>
          <p>Brindar al cliente calidad, excelencia, asesoramiento y hospitalidad en todo momento, realzando el valor humano en cada relación comercial, superando las expectativas.Creemos que la ética, la lealtad, el trabajo en equipo y la constante capacitación permiten mejorar el bienestar, siempre a su servicio, atendiendo sus dudas, sus inconvenientes y otorgando soluciones.
          </p>
        </div>
        <div className="text-center text-md-start col-12 col-md-6">
          <h2 className='text-center'>Misión</h2>
          <p>Ser líderes en el rubro de seguridad electrónica, trabajando junto a las grandes marcas de tecnología de seguridad, manteniendo la competitividad y priorizando la satisfacción del cliente  con personas talentosas, responsables y en constante capacitación para lograr todos nuestros objetivos propuestos. </p>
        </div>
      </div>
    </div>
    <Contacto />
    <Mapa />
    </>    
  );
}

export default Nosotros;
