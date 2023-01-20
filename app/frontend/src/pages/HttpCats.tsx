import { useState } from 'react';
import Header from '../components/Header';
import './HttpCats.css';

export default function HttpCats() {
  const [status, setStatus] = useState('418');

  const url = `https://http.cat/${status}`

  return (
    <>
      <Header />
    
      <main>
        <h3>Http Cats</h3>

        <input
          className='http-status-input'
          type='number'
          maxLength={3}
          placeholder='http status code'
          value={ status }
          onChange={ ({target}) => { setStatus(target.value) } }  
        />
        <img className='cat-img' src={ url } alt={ `http status code ${status}`} />
      </main>

    </>
  )
}
