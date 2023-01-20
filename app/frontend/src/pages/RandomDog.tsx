import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { fetchRandomDog } from '../services/randomDogApi';
import './RandomDog.css';

export default function RandomDog() {
  const [dog, setDog] = useState('');

  const getDog = async () => {
    const data = await fetchRandomDog();
    setDog(data);
  }
  
  useEffect(() => {
    getDog();
  }, []);

  return (
    <>
      <Header />

      <main>
        <h3>Random Dog</h3>

        <button
          className='refresh-btn'
          type='button'
          onClick={ () => getDog() }
        >
          REFRESH
        </button>

        {
        (dog.includes('.webm') || dog.includes('.mp4')) ?
          ( <video className='dog-img' src={ dog } /> ) :
          ( <img className='dog-img' src={dog} alt='random dog' /> )
        }
      </main>
    </>
  )
}
