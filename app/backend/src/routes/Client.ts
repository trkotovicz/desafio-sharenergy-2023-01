import { Router } from 'express'
import { clientController } from './main'

const clientRouter = Router()

clientRouter.get('/clients/search', clientController.findByName)
clientRouter.get('/clients/:id', clientController.findById)
clientRouter.delete('/clients/:id', clientController.delete)
clientRouter.get('/clients', clientController.list)
clientRouter.post('/clients', clientController.create)

export default clientRouter
