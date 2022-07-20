import { gql } from '@apollo/client'

/**
 * Executing a query
 *
 * We'll create a GraphQL query named GET_CLIENTS.
 * Remember to wrap query strings in the gql function to parse them into query documents
 */

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`

export { GET_CLIENTS }
