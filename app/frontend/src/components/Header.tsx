import { Link, useNavigate } from 'react-router-dom';
import { removeUserLocalStorage } from '../services/localStorage';
import { removeUserSession } from '../services/sessionStorage';
import logo_color from '../assets/images/logo_color.png';

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUserLocalStorage();
    removeUserSession();
    navigate('/');
  }

  return (
    <>
      <img src={logo_color} width='200px' alt='sharenergy logo' />
      <div className='links-container'>
        <Link to={"/random-users"}>Random Users</Link>
        <Link to={"/http-cats"}>HTTP Cats</Link>
        <Link to={"/random-dog"}>Random Dog</Link>
        <Link to={"/clients-api"}>Clients API</Link>
      </div>

      <button className='logout-btn' onClick={ () => handleLogout() }>
        LOGOUT
      </button>
    </>
  )
}
