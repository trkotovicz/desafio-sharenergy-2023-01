import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogin, userRegister } from '../services/apiRequests';
import { saveUserLocalStorage } from '../services/localStorage';
import { saveUserSession } from '../services/sessionStorage';
import './Login.css'

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showHiddenLogin, setShowHiddenLogin] = useState(false);
  const [conflictRegister, setConflictRegister] = useState(false);
  const [successRegister, setSuccessRegister] = useState(false);

  const handleClickLogin = async () => {
    try {
      const userData = await userLogin({ username, password });
      rememberMe ? saveUserLocalStorage(userData) : saveUserSession(userData)
      navigate('/random-users')
    } catch (error) {
      setShowHiddenLogin(true);
    }
  }

  const handleClickRegister = async () => {
    try {
      await userRegister({ username, password });
      setSuccessRegister(true)
    } catch (error) {
      setConflictRegister(true);
    }
  }

  const isValid = () => {
    const three = 3;
    const eight = 8;
    if (username.length < three || password.length < eight) return true
  }

  return (
    <form className='login-form'>

      <div className='input-container'>
        <label htmlFor='username' className='username-label'>
            USERNAME
            <br />
            <input
              className='username-input'
              type='text'
              id='username'
              placeholder='username'
              value={ username }
              onChange={ ({target}) => setUsername(target.value) }
              required
            />
          </label>
          <label htmlFor='password' className='password-label'>
            PASSWORD
            <br />
            <input
              className='password-input'
              type='password'
              id='password'
              placeholder='password'
              value={ password }
              onChange={ ({target}) => setPassword(target.value) }
              required
            />
          </label>

          <div className='remember-container'>
            <label htmlFor='remember' className='remember-label'>
              <input
                className='remember-input'
                type='checkbox'
                id='remember'
                onChange={ () => setRememberMe(true) }
              />
                {' '}
                Remember Me
            </label>
          </div>

          {showHiddenLogin ? (
            <span className='span-login-invalid'>
              Invalid username or password
            </span>
          ) : ''}

          {conflictRegister ? (
            <span className='span-register-conflict'>
              Username is already in use
            </span>
          ) : ''}

          {successRegister ? (
            <span className='span-register-success'>
              User successfully created
            </span>
          ) : ''}

      </div>

      <div className="btn-container">
        <button
          className='login-btn'
          type='button'
          disabled={ isValid() }
          onClick={ handleClickLogin }
          >
          LOGIN
        </button>
        <button
          className='register-btn'
          type='button'
          onClick={ handleClickRegister }
          >
          REGISTER
        </button>
      </div>
    </form>
  )
}
