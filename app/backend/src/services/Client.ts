import Client from '../models/Client'
import { ErrorTypes } from '../errors/catalog'
import { IClientZod, clientZodSchema } from '../interfaces/IClient'

export default class ClientService {
  list = async (): Promise<IClientZod[] | unknown> => {
    const clients = await Client.find()
    if (!clients) throw new Error(ErrorTypes.EntityNotFound)
    return clients
  }

  // findByName = async (name: string): Promise<IClientZod> => {}
  // findById = async (id: string): Promise<IClientZod> => {}
  // create = async (data: IClientZod): Promise<IClientZod> => {}
  // update = async (id: string, data: IClientZod): Promise<IClientZod> => {}
  // delete = async (id: string): Promise<void> => {}
}
