import md5 from 'md5'
import { ErrorTypes } from '../errors/catalog'
import IUser from '../interfaces/IUser'
import IUserJwt from '../interfaces/IUserJwt'
import User from '../models/User'

export default class UserService {
  login = async (username: string, password: string): Promise<IUserJwt> => {
    const user = await User.findOne({ username })
    if (!user) throw new Error(ErrorTypes.EntityNotFound)
    if (user.password !== md5(password)) throw new Error(ErrorTypes.UnauthorizedError)
    return { id: user.id, username: user.username }
  }

  // createUser = async (username: string, password: string): Promise<IUser | undefined> => {}
}
