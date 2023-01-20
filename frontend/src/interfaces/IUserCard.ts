export default interface IUserCard {
  picture: {
    large: string
  }
  name: {
    first: string
    last: string
  }
  email: string
  login: {
    uuid: string
    username: string
  }
  dob: {
    age: number
  }
}
