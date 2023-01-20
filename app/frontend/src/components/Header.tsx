import { Link, useNavigate } from 'react-router-dom';
import { removeUserLocalStorage } from '../services/localStorage';
import { removeUserSession } from '../services/sessionStorage';
import logo_color from '../assets/images/logo_color.png';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUserLocalStorage();
    removeUserSession();
    navigate('/');
  }

  return (
    <main className='header-container'>

      <img className='logo-img logo-img-standard' src={logo_color} width='200px' alt='sharenergy logo' />

      <button className='logout-btn' onClick={ () => handleLogout() }>
        LOGOUT
      </button>

      <div className='links-container'>
        <button className='header-pages-btn' onClick={ () => navigate('/random-users') }>Users</button>
        <button className='header-pages-btn' onClick={ () => navigate('/http-cats') }>HTTP Cats</button>
        <button className='header-pages-btn' onClick={ () => navigate('/random-dog') }>Dog</button>
        <button className='header-pages-btn' onClick={ () => navigate('/clients-api') }>Clients API</button>
      </div>

    </main>

  )
}
