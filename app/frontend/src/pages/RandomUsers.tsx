import { useEffect, useState } from 'react';
import Header from '../components/Header';
import IUserCard from '../interfaces/IUserCard';
import { fetchRandomUsers } from '../services/randomUsersApi';

export default function RandomUsers() {
  const [users, setUsers] = useState<IUserCard | any>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  
    useEffect(() => {
      getUsers();
    }, [page]);

  const getUsers = async () => {
    const data = await fetchRandomUsers(page);
    setUsers(data);
  }

  const handleSearch = () => {
    const result = users.filter(({ name, email, login }: IUserCard) => {
      if (name.first.toLowerCase().includes(search.toLowerCase())
        || email.toLowerCase().includes(search.toLowerCase())
        || login.username.toLowerCase().includes(search.toLowerCase())) {
        return search
      }
      return ''
    });
    if (result.length) {
      return setUsers(result);
    }
    return getUsers();
  }

  const handleNextPage = () => { setPage(page + 1) }

  const handleFirstPage = () => { setPage(1) }

  return (
    <>
      <Header />
    
      <main>
        <h3>Random Users API</h3>

        <div className='search-container'>
          <input
            className='search-input'
            type='text'
            placeholder='type a name, email or username'
            value={ search }
            onChange={ ({target}) => setSearch(target.value) }            
          />
          <button type='button' onClick={ handleSearch }>
            SEARCH
          </button>
          <button
            type='button'
            onClick={ () => {
              getUsers()
              setSearch('')
            } }>
            CLEAR
          </button>
        </div>

        <div className='users-container'>
          { users?.map((user: IUserCard) => (
            <div className='user-card' key={ user.login.uuid }>
              <img src={ user.picture.large } alt='profile' />
              <p>{ `${user.name.first} ${user.name.last}`}</p>
              <p>{ user.email }</p>
              <p>{ user.login.username }</p>
              <p>Age: { user.dob.age }</p>
            </div>
          ))}

          <button
            className='next-page-btn'
            type='button'
            onClick={ handleFirstPage }
          >
            FIRST PAGE
          </button>
          <button
            className='next-page-btn'
            type='button'
            onClick={ handleNextPage }
          >
            NEXT PAGE
          </button>

        </div>
      </main>

    </>
  )
}
