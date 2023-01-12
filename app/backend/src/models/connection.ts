import 'dotenv/config'
import mongoose from 'mongoose'
import Client from './Client'
import User from './User'

const MONGO_DB_URI = 'mongodb://localhost:27017/'

const options = {
  dbName: 'sharenergy'
}

const defaultUser = new User({
  username: 'desafiosharenergy',
  password: '92305f21d8281ac002904977d84c0b2a' // sh@r3n3rgy
})

const seedClients = [
  {
    name: 'Bartholomew J. Bouvier Simpson',
    email: 'bart@simpson.com',
    phone: '932123456',
    address: 'Evergreen Terrace, 632',
    cpf: '42838420283'
  },
  {
    name: 'Rick Sanchez',
    email: 'rickzinho@c137.com',
    phone: '979751254',
    address: 'Dimension C, 137',
    cpf: '31415926535'
  },
  {
    name: 'Morty Smith',
    email: 'morty69@c137.com',
    phone: '906908008',
    address: 'The Wubba Lubba Dub Dub of Wall Street, 12',
    cpf: '16900196001'
  },
  {
    name: 'Homer Jay Simpson',
    email: 'homer@simpson.com',
    phone: '977771111',
    address: 'Evergreen Terrace, 632',
    cpf: '79645300600'
  }
]

async function connectToDatabase() {
  await mongoose.connect(process.env.MONGO_URI || MONGO_DB_URI, options)
  
  await User.deleteMany({})
  await defaultUser.save()

  await Client.deleteMany({})
  await Client.insertMany(seedClients)

  console.log('Banco de dados populado.')
}

export default connectToDatabase
