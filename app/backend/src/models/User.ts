import { model, Schema } from 'mongoose'

interface IUser {
  username: string
  password: string
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { versionKey: false })

const User = model<IUser>('User', userSchema)

export default User
