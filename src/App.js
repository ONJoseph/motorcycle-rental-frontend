import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';

import Login from './pages/Login';
import Registration from './pages/Registration';
import Main from './pages/Main';
import Vehicle from './pages/Vehicle';

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/vehicle/:id" element={<Vehicle />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/delete-vehicle" element={<Delete />} />
          <Route path="/add-vehicle" element={<Add />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
