import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Clients from './pages/Clients';
import Login from './pages/Login';
import RandomUsers from './pages/RandomUsers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/clients-api" element={ <Clients /> } />
        <Route path="/random-users" element={ <RandomUsers /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
