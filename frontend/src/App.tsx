import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Clients from './pages/Clients';
import HttpCats from './pages/HttpCats';
import Login from './pages/Login';
import RandomDog from './pages/RandomDog';
import RandomUsers from './pages/RandomUsers';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/clients-api" element={ <Clients /> } />
          <Route path="/random-users" element={ <RandomUsers /> } />
          <Route path="/http-cats" element={ <HttpCats /> } />
          <Route path="/random-dog" element={ <RandomDog /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
