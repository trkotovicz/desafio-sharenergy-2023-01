import { model, Schema } from 'mongoose'
import IClient from '../interfaces/IClient'

const clientMongooseSchema = new Schema<IClient>({
  name: String,
  email: String,
  phone: String,
  address: String,
  cpf: String
}, { versionKey: false })

const Client = model<IClient>('Users', clientMongooseSchema)

export default Client
