import IUser from '../interfaces/IUser';

export const saveUserLocalStorage = (data: IUser) => localStorage.setItem('user', JSON.stringify(data));

export const removeUserLocalStorage = () => localStorage.removeItem('user');

export const getUserLocalStorage = () => {
  const data = localStorage.getItem('user');
  return JSON.parse(data || '');
}
