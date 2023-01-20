import { StatusCodes } from 'http-status-codes'

export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  UnauthorizedError = 'UnauthorizedError',
  ConflictError = 'ConflictError',
  GenericError = 'GenericError',
  InvalidFormatError = 'InvalidFormatError',
  InvalidToken = 'InvalidToken'
}

interface ErrorResponseObject {
  message: string
  httpStatus: number
}

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
}

export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    message: 'Entity not found',
    httpStatus: StatusCodes.NOT_FOUND
  },
  UnauthorizedError: {
    message: 'Unauthorized access',
    httpStatus: StatusCodes.UNAUTHORIZED
  },
  ConflictError: {
    message: 'User already exists',
    httpStatus: StatusCodes.CONFLICT
  },
  GenericError: {
    message: 'Something wrong happend',
    httpStatus: StatusCodes.INTERNAL_SERVER_ERROR
  },
  InvalidFormatError: {
    message: 'Invalid Format',
    httpStatus: StatusCodes.BAD_REQUEST
  },
  InvalidToken: {
    message: 'Expired or invalid token',
    httpStatus: StatusCodes.UNAUTHORIZED
  }
}
