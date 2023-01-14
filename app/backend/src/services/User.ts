import md5 from 'md5'
import User from '../models/User'
import IUserJwt from '../interfaces/IUserJwt'
import { ErrorTypes } from '../errors/catalog'
import { IUserZod, userZodSchema } from '../interfaces/IUser'

export default class UserService {
  login = async (username: string, password: string): Promise<IUserJwt> => {
    const user = await User.findOne({ username })
    if (!user) throw new Error(ErrorTypes.EntityNotFound)
    if (user.password !== md5(password)) throw new Error(ErrorTypes.UnauthorizedError)
    return { id: user.id, username: user.username }
  }

  createUser = async (username: string, password: string): Promise<IUserZod> => {
    const parsed = userZodSchema.safeParse({ username, password })
    if (!parsed.success) throw parsed.error

    const alreadyExists = await User.findOne({ username })
    if (alreadyExists) throw new Error(ErrorTypes.ConflictError)

    const user = await User.create({ username, password: md5(password) })
    return user
  }
}
