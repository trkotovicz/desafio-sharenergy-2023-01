import { model, Schema } from 'mongoose'
import IUser from '../interfaces/IUser'

const userMongooseSchema = new Schema<IUser>({
  username: String,
  password: String
}, { versionKey: false })

const User = model<IUser>('Users', userMongooseSchema)

export default User
