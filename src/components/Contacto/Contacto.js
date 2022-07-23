import '../../style/style.css';

function Contacto() {
  return (
    <div className="contacto mt-5">
      <div className="container">
      <h2 className="contacto-titulo">Contactate</h2>
      <form action="formulario.php">
        <div className="contacto-row">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <div className="contacto-row">
        <label htmlFor="telefono">Teléfono:</label>
        <input type="number" inputMode='numeric' id="telefono" name="telefono" />
        </div>
        <div className="contacto-row">
          <label htmlFor="email">mail:</label>
          <input type="email" id="email" name="email" required />
        </div>
          <div className="contacto-row">
          <label htmlFor="consulta">Consulta:</label>
          <textarea id="subject" name="subject"></textarea>
        </div>
          <div className="contacto-row">
          <input className="boton-enviar" type="submit" value="Enviar" />
          </div>
      </form>
      </div>
    </div>
  );
}

export default Contacto;
