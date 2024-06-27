import React from 'react';

const Producto = ({ producto, onEncargar }) => {
  const { id, nombre, precio, imagen } = producto;
  const [color, setColor] = React.useState('Negro');
  const [talla, setTalla] = React.useState('x-small');

  const cardTitleStyle = {
    color: '#000', // Cambia a negro u otro color visible
    textAlign: 'center', // Centrar el texto
    fontSize: '1.2em', // Ajusta el tamaño de la fuente según sea necesario
    marginTop: '10px' // Añade un margen superior si es necesario
  };

  return (
    <div className="col producto" id={`producto${id}`} data-id={id}>
      <div className="card">
        <div className="card-body card4">
          <section>
            <h5 className="objetoCentrado1">
              <i className="bi bi-activity"></i> (Producto por encargo) <i className="bi bi-activity"></i>
            </h5>
          </section>
          <img src={imagen} className="card-img-top img-fluid" alt={nombre} />
          <h5 className="card-title" style={cardTitleStyle}>{nombre}</h5>
          <h4 className="objetoCentrado1 tituloPrecio1">
            Precio:
            <span>
              <h3 className="tituloImportante2 objetoCentrado1"> ${precio.toFixed(2)} </h3>
            </span>
          </h4>
          <label htmlFor={`selectColor${id}`} className="objetoCentrado1 tituloPequeño1">
            <i className="bi bi-activity"></i> ELIGE COLOR <i className="bi bi-activity"></i>
          </label>
          <select
            id={`selectColor${id}`}
            className="form-select mb-3 tituloPequeño4"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="Negro">Negro</option>
            <option value="Blanco">Blanco</option>
            <option value="Gris-claro">Gris Claro</option>
            <option value="Gris-oscuro">Gris Oscuro</option>
            <option value="Rojo">Rojo</option>
            <option value="Naranja">Naranja</option>
          </select>
          <label htmlFor={`selectTalla${id}`} className="objetoCentrado1 tituloPequeño1">
            <i className="bi bi-activity"></i> ELIGE TALLE <i className="bi bi-activity"></i>
          </label>
          <select
            id={`selectTalla${id}`}
            className="form-select tituloPequeño4"
            value={talla}
            onChange={(e) => setTalla(e.target.value)}
          >
            <option value="x-small">X-Small</option>
            <option value="xx-small">XX-Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="x-large">X-Large</option>
            <option value="xx-large">XX-Large</option>
          </select>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="botonEncargar btn btn-primary" onClick={() => onEncargar(id, color, talla)}>
              <i className="bi bi-shift-fill"></i> Encargar 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;
