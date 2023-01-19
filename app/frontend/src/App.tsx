import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Clients from './pages/Clients';
import HttpCats from './pages/HttpCats';
import Login from './pages/Login';
import RandomUsers from './pages/RandomUsers';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/clients-api" element={ <Clients /> } />
        <Route path="/random-users" element={ <RandomUsers /> } />
        <Route path="/http-cats" element={ <HttpCats /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
