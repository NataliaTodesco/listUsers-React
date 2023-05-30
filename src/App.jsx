import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom'
import Listado from './components/listado';
import Usuario from './components/usuario';

function App() {
  return (
    <div className="App">
      <Router>
        <Link style={{fontSize: "x-large", margin:"1.5rem", color: "#6b705c",textDecoration:"underline"}} to='/'>
        <i class="bi bi-person-lines-fill mr-2"></i>  
          Usuarios
        </Link>
        <Routes>
          <Route path='/' element={<Listado></Listado>}></Route>
          <Route path='/usuario/:id' element={<Usuario></Usuario>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
