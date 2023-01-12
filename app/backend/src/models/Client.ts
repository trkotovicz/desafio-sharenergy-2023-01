import { model, Schema } from 'mongoose'

interface IClient {
  name: string
  email: string
  phone: string
  address: string
  cpf: string
}

const clientSchema = new Schema<IClient>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  cpf: { type: String, required: true }
}, { versionKey: false })

const Client = model<IClient>('Client', clientSchema)

export default Client
