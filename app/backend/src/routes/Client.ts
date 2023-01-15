import { Router } from 'express'
import { clientController } from './main'

const clientRouter = Router()

clientRouter.get('/clients', clientController.list)
clientRouter.get('/clients/search', clientController.findByName)
clientRouter.get('/clients/:id', clientController.findById)

export default clientRouter
