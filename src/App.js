// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que esto esté presente
import PaginaCreacion from './Pages/PaginaCreacion';
import PaginaDetalle from './Pages/PaginaDetalle';
import PaginaInicio from './Pages/PaginaInicio';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Lista de Tareas</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/crear">Crear Tarea</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/detalle/:id" element={<PaginaDetalle />} />
          <Route path="/crear" element={<PaginaCreacion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
