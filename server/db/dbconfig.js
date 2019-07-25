import mongoose from 'mongoose'
const connectionString = "mongodb://porter:forSammy14@ds052819.mlab.com:52819/sams-class"

let connection = mongoose.connection

mongoose.connect(connectionString, {
  useNewUrlParser: true
})
connection.on("error", err => {
  console.error('[DATABASE ERROR]:', err)
})
connection.once("open", () => {
  console.log("Connected to the DB")
})



