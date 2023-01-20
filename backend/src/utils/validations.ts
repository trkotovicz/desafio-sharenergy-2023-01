import { cpf } from 'cpf-cnpj-validator'
import { ErrorTypes } from '../errors/catalog'

const validateCpf = (data: string) => {
  const isValid = cpf.isValid(data)
  if (!isValid)  throw new Error(ErrorTypes.InvalidFormatError)
}

export { validateCpf }
