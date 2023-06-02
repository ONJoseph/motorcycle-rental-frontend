import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';

import Login from './pages/Login';

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
