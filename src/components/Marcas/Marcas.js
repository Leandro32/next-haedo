import '../../style/style.css';
import marca1 from '../../assets/marcas/alse.png'
import marca2 from '../../assets/marcas/alhua.png'
import marca3 from '../../assets/marcas/garnet.png'
import marca4 from '../../assets/marcas/imou.png'
import marca5 from '../../assets/marcas/marshall.png'
import marca6 from '../../assets/marcas/netquality.png'
import marca7 from '../../assets/marcas/zkteco.png'
import marca8 from '../../assets/marcas/cygnus.png'

function Marcas() {
  return (
    <div className="marcas bg-light py-5">
      <h2>Contamos con las mejores marcas</h2>
      <div className="marcas-imagenes d-flex justify-content-center align-items-center">
        <div className="marca-imagen-container">
          <img className="marca-imagen py-3" src={marca1} />
        </div>
        <div className="marca-imagen-container">
          <img className="marca-imagen py-3" src={marca2} />
        </div>
        <div className="marca-imagen-container">
          <img className="marca-imagen py-3" src={marca3} />
        </div>
        <div className="marca-imagen-container">
          <img className="marca-imagen py-3" src={marca4} />
        </div>
        <div className="marca-imagen-container">
          <img className="marca-imagen py-3" src={marca5} />
        </div>
        <div className="marca-imagen-container">
          <img className="marca-imagen py-3" src={marca6} />
        </div>
        <div className="marca-imagen-container">
          <img className="marca-imagen py-3" src={marca7} />
        </div>
        <div className="marca-imagen-container">
          <img className="marca-imagen py-3" src={marca8} />
        </div>
      </div>
    </div>
  );
}

export default Marcas;
