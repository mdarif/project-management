const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })

// console.log('process.env>>>>>>>>>>>>>>>>>>>>>>', process.env.MONGO_URI)

/**
 * mongoose
 * Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
 * Mongoose supports both promises and callbacks.
 */

/**
 * First, we need to define a connection. If your app uses only one database,
 * you should use mongoose.connect. If you need to create additional connections,
 * use mongoose.createConnection.
 */
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI)

  console.log(`MongoDB Connected: ${conn.connection.host}`.blue.underline.bold)
}

module.exports = connectDB
