import { Router } from 'express'
import { clientController } from './main'

const clientRouter = Router()

clientRouter.get('/clients', clientController.list)

export default clientRouter
