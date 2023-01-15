import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import ClientService from '../services/Client'

export default class ClientController {
  constructor(private clientService: ClientService) {}

  list = async (_req: Request, res: Response) => {
    const users = await this.clientService.list()
    res.status(StatusCodes.OK).json(users)
  }

  findByName = async (req: Request, res: Response) => {
    const q: string = req.query.q as string
    const user = await this.clientService.findByName(q)
    res.status(StatusCodes.OK).json(user)
  }

  findById = async (req: Request, res: Response) => {
    const { id } = req.params
    const user = await this.clientService.findById(id)
    res.status(StatusCodes.OK).json(user)
  }
}
