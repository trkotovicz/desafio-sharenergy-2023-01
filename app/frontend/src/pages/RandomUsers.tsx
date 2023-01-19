import { useEffect, useState } from 'react';
import IUserCard from '../interfaces/IUserCard';
import { fetchRandomUsers } from '../services/randomUsersApi';

export default function RandomUsers() {
  const [users, setUsers] = useState<IUserCard | any>([]);
  const [page, setPage] = useState(1);

  const getUsers = async () => {
    const data = await fetchRandomUsers(page)
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
    console.log(users);
  }, [page]);

  const handleNextPage = () => { setPage(page + 1) }

  const handleFirstPage = () => { setPage(1) }

  return (
    <main>
      <h3>Random Users API</h3>

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
  )
}
