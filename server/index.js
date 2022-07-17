const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const colors = require('colors')
const connectDB = require('./config/db')

const port = process.env.PORT || 5000
require('dotenv').config()

const app = express()

/**
 * GraphiQL
 * GraphiQL is a great tool for debugging and inspecting a server,
 * so we recommend running it whenever your application is in development mode.
 */

// Connect to the MongoDB database through Mongoose
connectDB()

/**
 * app.use()
 * the middleware function is executed when the base of the requested path matches path.
 */
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development' // Since we configured graphqlHTTP with graphiql: true, you can use the GraphiQL tool to manually issue GraphQL queries
  })
)
/**
 * app.listen()
 * Starts a UNIX socket and listens for connections on the given path.
 * This method is identical to Node’s http.Server.listen().
 */
app.listen(port, console.log(`Running a GraphQL API server at port ${port}`))
