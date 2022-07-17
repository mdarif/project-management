const express = require('express')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')
const port = process.env.PORT || 5000
const schema = require('./schema/schema')

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
  })
)

app.listen(port, console.log(`Server running on port ${port}`))
