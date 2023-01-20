import logo_color from '../assets/images/logo_color.png';
import './HeaderLogin.css';

export default function HeaderLogin() {

  return (
    <main className='header-login-container'>
      <img className='logo-img' src={logo_color} width='200px' alt='sharenergy logo' />
    </main>
  )
}
