import '../../../style/style.css';

function Producto(props) {
  const {titulo,categoria,subcategoria,precio,codigo,destacado,url} = props
  const precioF = precio.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  return (
    <div className="producto">
      <div className="producto-imagen mb-3">
        <img src={url} alter="producto" />
      </div>
      <div className="categorias">
        <div className="categoria">{categoria}</div>
        <div className="categoria">{subcategoria}</div>
      </div>
      <div className="precio">$ {precioF}</div>
      <div className="codigo">{codigo}</div>
      <div className="titulo">{titulo}</div>
      { destacado >0 &&
        <div className='destacado'>
           <div className="destacado-inside">Oferta</div>
        </div>
      }
    </div>
  );
}

export default Producto;
