const mongoose = require('mongoose')
// const dotenv = require('dotenv')
// dotenv.config({ path: './.env' })

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
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.blue.underline.bold
    )
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold)
    process.exit(1) // exit process with failure
  }
}

module.exports = connectDB
