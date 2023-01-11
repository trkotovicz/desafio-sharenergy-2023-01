import { z } from 'zod'

const clientZodSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(8),
  address: z.string().min(3),
  cpf: z.string().length(11)
})

type IClient = z.infer<typeof clientZodSchema>

export default IClient
