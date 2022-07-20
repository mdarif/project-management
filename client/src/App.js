import Header from './components/Header'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Clients from './components/Clients'
import Projects from './components/Projects'
import AddClientModal from './components/AddClientModal'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge (existing, incoming) {
            return incoming
          }
        },
        projects: {
          merge (existing, incoming) {
            return incoming
          }
        }
      }
    }
  }
})

/**
 * ApolloClient
 * we'll initialize ApolloClient, passing its constructor a configuration object
 * with the 'uri' and 'cache' fields:
 *
 * 'uri' specifies the URL of our GraphQL server.
 * 'cache' is an instance of InMemoryCache, which Apollo Client uses to cache query
 * results after fetching them.
 */
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache
})

function App () {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className='container'>
        <AddClientModal />
        <Projects />
        <Clients />
      </div>
    </ApolloProvider>
  )
}

export default App
