import { gql } from '@apollo/client'

const ADD_CLIENT = gql`
  mutation AddClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`

const DELETE_CLIENT = gql`
  mutation DeleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`

export { ADD_CLIENT, DELETE_CLIENT }
