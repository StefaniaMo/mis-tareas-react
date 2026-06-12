import { Routes, Route, Link } from 'react-router-dom';
import Tarea20 from './componentes/tarea20/Tarea20.jsx'; 
import './App.css'

function App() {
  return (
    <div className='home'>
      <h1>Mi Panel de Tareas de React</h1>
      
      {/* Barra de navegación para moverte entre tareas */}
      <nav className='nav'>
        <Link to="/tarea20" className='link' >
          Tarea 20
        </Link>
        {/* Aquí vas a ir agregando los enlaces de las próximas tareas, ej: */}
        {/* <Link to="/tarea21" style={{ padding: '10px 15px', background: '#eee', textDecoration: 'none', borderRadius: '5px', color: 'black' }}>Tarea 21</Link> */}
      </nav>

      <hr />

      {/* Aquí abajo se va a dibujar la tarea según el botón que toques */}
      <main className='main'>
        <Routes>
          {/* Vista inicial de la página */}
          <Route path="/" element={<h2>Selecciona una tarea en el menú de arriba para visualizar la tarea.</h2>} />
          
          {/* Ruta de tu Tarea 20 */}
          <Route path="/tarea20" element={<Tarea20 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;