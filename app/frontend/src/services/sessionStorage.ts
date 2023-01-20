import IUser from '../interfaces/IUser';

export const saveUserSession = (data: IUser) => sessionStorage.setItem('user', JSON.stringify(data));

export const getUserSession = () => {
  const data = sessionStorage.getItem('user');
  return JSON.parse(data || '');
}

export const removeUserSession = () => sessionStorage.removeItem('user');
