import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showHidden, setShowHidden] = useState(false);

  return (
    <form className='login-form'>

      <div className='input-container'>
        <label htmlFor='username' className='username-label'>
            USERNAME
            <input
              className='username-input'
              type='text'
              placeholder='username'
              value={ username }
              onChange={ ({target}) => setUsername(target.value) }
              required
            />
          </label>
          <label htmlFor='password' className='password-label'>
            PASSWORD
            <input
              className='password-input'
              type='password'
              placeholder='password'
              value={ password }
              onChange={ ({target}) => setPassword(target.value) }
              required
            />
          </label>
          <div className='remember-container'>
            <label htmlFor='remember' className='remember-label'>
              <input className='remember-input' type='checkbox'/>
                {' '}
                REMEMBER ME
            </label>
          </div>

          {showHidden ? (
            <span className='span-login-invalid'>
              INVALID USERNAME OR PASSWORD
            </span>
          ) : ''}
      </div>

      <div className="btn-container">
        <button
          className='login-btn'
          type='button'
          // disabled={ isValid() }
          // onClick={ handleClickLogin }
          >
          LOGIN
        </button>
        <button
          className='register-btn'
          type='button'
          // onClick={ handleClickRegister }
          >
          REGISTER
        </button>
      </div>
    </form>
  )
}
