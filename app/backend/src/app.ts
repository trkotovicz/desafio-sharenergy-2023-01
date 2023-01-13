import express from 'express'
import 'express-async-errors'
import errorHandler from './middlewares/error'
import userRouter from './routes/User'

const app = express()
app.use(express.json())

app.use(userRouter)

app.use(errorHandler)

export default app
