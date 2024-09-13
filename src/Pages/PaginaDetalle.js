// src/pages/PaginaDetalle.js
import { useParams } from 'react-router-dom';
import tareas from '../Tareas';

function PaginaDetalle() {
  const { id } = useParams();
  const tarea = tareas.find((t) => t.id === parseInt(id));

  if (!tarea) {
    return <h2 className="text-center">Tarea no encontrada</h2>;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">{tarea.titulo}</h1>
        <p className="card-text">{tarea.descripcion}</p>
        <p className="card-text"><strong>Fecha de creación:</strong> {tarea.fecha}</p>
        <p className="card-text"><strong>Estado:</strong> {tarea.estado}</p>
      </div>
    </div>
  );
}

export default PaginaDetalle;
