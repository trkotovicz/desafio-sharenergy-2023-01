import Client from '../models/Client'
import { ErrorTypes } from '../errors/catalog'
import { IClientZod, clientZodSchema } from '../interfaces/IClient'
import { validateCpf } from '../utils/validations'

export default class ClientService {
  list = async (): Promise<IClientZod[] | unknown> => {
    const clients = await Client.find()
    if (!clients) throw new Error(ErrorTypes.EntityNotFound)
    return clients
  }

  findByName = async (name: string): Promise<IClientZod | IClientZod[] | unknown> => {
    const client = await Client.find({ name: { $regex: name, $options: 'i' } })
    if (!client) throw new Error(ErrorTypes.EntityNotFound)
    return client
  }

  findById = async (id: string): Promise<IClientZod | unknown> => {
    const client = await Client.findById(id)
    if (!client) throw new Error(ErrorTypes.EntityNotFound)
    return client
  }

  create = async (data: IClientZod): Promise<IClientZod> => {
    const { cpf, email } = data
    validateCpf(cpf)
    const parsed = clientZodSchema.safeParse(data)
    if (!parsed.success) throw parsed.error

    const alreadyExists = await Client.findOne({ $or: [ { cpf }, { email } ] })
    if (alreadyExists) throw new Error(ErrorTypes.ConflictError)

    const client = await Client.create(data)
    return client
  }

  update = async (id: string, data: IClientZod): Promise<IClientZod | unknown> => {
    validateCpf(data.cpf)
    const parsed = clientZodSchema.safeParse(data)
    if (!parsed.success) throw parsed.error

    const client = await Client.findByIdAndUpdate(id, data)
    return client
  }

  delete = async (id: string): Promise<void> => {
    const client = await Client.findByIdAndDelete(id)
    if (!client) throw new Error(ErrorTypes.ConflictError)
  }
}
