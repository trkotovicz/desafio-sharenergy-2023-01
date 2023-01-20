import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import ClientService from '../services/Client'
import JwtService from '../services/jwtService'

export default class ClientController {
  constructor(private clientService: ClientService) {}

  list = async (req: Request, res: Response) => {
    const token = String(req.headers.authorization)
    await JwtService.validateToken(token)
    const clients = await this.clientService.list()
    res.status(StatusCodes.OK).json(clients)
  }

  findByName = async (req: Request, res: Response) => {
    const token = String(req.headers.authorization)
    await JwtService.validateToken(token)
    const q: string = req.query.q as string
    const client = await this.clientService.findByName(q)
    res.status(StatusCodes.OK).json(client)
  }

  findById = async (req: Request, res: Response) => {
    const token = String(req.headers.authorization)
    await JwtService.validateToken(token)
    const { id } = req.params
    const client = await this.clientService.findById(id)
    res.status(StatusCodes.OK).json(client)
  }

  create = async (req: Request, res: Response) => {
    const token = String(req.headers.authorization)
    await JwtService.validateToken(token)
    const data = req.body
    const client = await this.clientService.create(data)
    res.status(StatusCodes.CREATED).json(client)
  }

  update = async (req: Request, res: Response) => {
    const token = String(req.headers.authorization)
    await JwtService.validateToken(token)
    const { id } = req.params
    await this.clientService.update(id, req.body)
    res.status(StatusCodes.ACCEPTED).end()
  }

  delete = async (req: Request, res: Response) => {
    const token = String(req.headers.authorization)
    await JwtService.validateToken(token)
    const { id } = req.params
    await this.clientService.delete(id)
    res.status(StatusCodes.ACCEPTED).end()
  }
}
