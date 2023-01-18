import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Clients from './pages/Clients';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/clients-api" element={ <Clients /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
