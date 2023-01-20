import ClientController from '../controllers/Client'
import UserController from '../controllers/User'
import ClientService from '../services/Client'
import UserService from '../services/User'

const userService = new UserService()
const userController = new UserController(userService)

const clientService = new ClientService
const clientController = new ClientController(clientService)

export { userController, clientController }
