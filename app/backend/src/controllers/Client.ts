import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import ClientService from '../services/Client'

export default class ClientController {
  constructor(private clientService: ClientService) {}

  list = async (_req: Request, res: Response) => {
    const users = await this.clientService.list()
    res.status(StatusCodes.OK).json(users)
  }
}
