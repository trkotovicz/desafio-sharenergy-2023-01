import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import ClientService from '../services/Client'

export default class ClientController {
  constructor(private clientService: ClientService) {}

  list = async (_req: Request, res: Response) => {
    const clients = await this.clientService.list()
    res.status(StatusCodes.OK).json(clients)
  }

  findByName = async (req: Request, res: Response) => {
    const q: string = req.query.q as string
    const client = await this.clientService.findByName(q)
    res.status(StatusCodes.OK).json(client)
  }

  findById = async (req: Request, res: Response) => {
    const { id } = req.params
    const client = await this.clientService.findById(id)
    res.status(StatusCodes.OK).json(client)
  }

  create = async (req: Request, res: Response) => {
    const data = req.body
    const client = await this.clientService.create(data)
    res.status(StatusCodes.CREATED).json(client)
  }

  delete = async (req: Request, res: Response) => {
    const { id } = req.params
    await this.clientService.delete(id)
    res.status(StatusCodes.ACCEPTED).end()
  }
}
