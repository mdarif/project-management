import Header from './components/Header'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Project from './pages/Project'

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
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects/:id' element={<Project />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
