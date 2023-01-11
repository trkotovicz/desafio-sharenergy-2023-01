import { z } from 'zod'

const userZodSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(8)
})

type IUser = z.infer<typeof userZodSchema>

export default IUser
