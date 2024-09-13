// src/pages/PaginaInicio.js
import { Link } from 'react-router-dom';
import tareas from '../Tareas';

function PaginaInicio() {
  return (
    <div>
      <h1 className="text-center mb-4">Lista de Tareas</h1>
      <ul className="list-group">
        {tareas.map((tarea) => (
          <li key={tarea.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{tarea.titulo}</h5>
              <p>{tarea.descripcion}</p>
            </div>
            <Link to={`/detalle/${tarea.id}`} className="btn btn-primary">Ver Detalles</Link>
          </li>
        ))}
      </ul>
      <div className="text-center mt-4">
        <Link to="/crear" className="btn btn-success">Crear Nueva Tarea</Link>
      </div>
    </div>
  );
}

export default PaginaInicio;
