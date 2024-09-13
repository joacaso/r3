// src/pages/PaginaCreacion.js
import { useState } from 'react';
import tareas from '../Tareas';

function PaginaCreacion() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [completa, setCompleta] = useState(false);

  const agregarTarea = () => {
    const nuevaTarea = {
      id: tareas.length + 1,
      titulo,
      descripcion,
      fecha: new Date().toISOString().split('T')[0],
      estado: completa ? 'Completa' : 'Incompleta',
    };
    tareas.push(nuevaTarea);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Crear Nueva Tarea</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            agregarTarea();
          }}
        >
          <div className="mb-3">
            <label className="form-label">Título</label>
            <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea className="form-control" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={completa}
              onChange={(e) => setCompleta(e.target.checked)}
            />
            <label className="form-check-label">¿Completada?</label>
          </div>
          <button type="submit" className="btn btn-primary">Agregar Tarea</button>
        </form>
      </div>
    </div>
  );
}

export default PaginaCreacion;
