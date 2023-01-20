import { Router } from 'express'
import { clientController } from './main'

const clientRouter = Router()

clientRouter.get('/clients/search', clientController.findByName)
clientRouter.get('/clients/:id', clientController.findById)
clientRouter.put('/clients/:id', clientController.update)
clientRouter.delete('/clients/:id', clientController.delete)
clientRouter.get('/clients', clientController.list)
clientRouter.post('/clients', clientController.create)

export default clientRouter

/**
 * @swagger
 *  tags:
 *    name: Client
 *    description: CRUD dos clientes
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *       Client:
 *         type: object
 *         required:
 *            - name
 *            - email
 *            - phone
 *            - address
 *            - cpf
 *         properties:
 *            name:
 *              type: string
 *            email:
 *              type: string
 *            phone:
 *              type: string
 *            address:
 *              type: string
 *            cpf:
 *              type: string
 *         example:
 *            name: Peter Parker
 *            email: peter@spider.com
 *            phone: "99999999"
 *            address: Rua Ingram, 20
 *            cpf: "38161257000"
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *       ClientResponse:
 *         type: object
 *         properties:
 *            _id:
 *              type: string
 *            name:
 *              type: string
 *            email:
 *              type: string
 *            phone:
 *              type: string
 *            address:
 *              type: string
 *            cpf:
 *              type: string
 */

/**
 * @swagger
 *   /clients:
 *      get:
 *        tags: [Client]
 *        description: Lista todos os clientes cadastrados
 *        security:
 *          - apiKey: []
 *        responses:
 *          200:
 *            description: OK
 *            content:
 *              application/json:
 *                schema:
 *                  type: array
 *                  $ref: '#/components/schemas/ClientResponse'
 */

/**
 * @swagger
 *   /clients:
 *      post:
 *        tags: [Client]
 *        description: Cadastra um novo cliente
 *        requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/Client'
 *        security:
 *          - apiKey: []
 *        responses:
 *          201:
 *            description: CREATED
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  $ref: '#/components/schemas/ClientResponse'
 */

/**
 * @swagger
 *   /clients/{id}:
 *      put:
 *        tags: [Client]
 *        description: Edita os dados de um cliente existente
 *        requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/Client'
 *        security:
 *          - apiKey: []
 *        responses:
 *          202:
 *            description: ACCEPTED
 */

/**
 * @swagger
 *   /clients/{id}:
 *      delete:
 *        tags: [Client]
 *        description: Exclui um cliente cadastrado através do id
 *        security:
 *          - apiKey: []
 *        responses:
 *          202:
 *            description: ACCEPTED
 */

/**
 * @swagger
 *   /clients/{id}:
 *      get:
 *        tags: [Client]
 *        description: Busca um cliente através do id
 *        security:
 *          - apiKey: []
 *        responses:
 *          200:
 *            description: OK
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  $ref: '#/components/schemas/ClientResponse'
 */

/**
 * @swagger
 *   /clients/search:
 *      get:
 *        tags: [Client]
 *        description: Busca um cliente através do nome
 *        parameters:
 *          - in: query
 *            name: q
 *            schema:
 *              type: string
 *        security:
 *          - apiKey: []
 *        responses:
 *          200:
 *            description: OK
 *            content:
 *              application/json:
 *                schema:
 *                  type: array
 *                  $ref: '#/components/schemas/ClientResponse'
 */
