import mongoose from 'mongoose'
let Schema = mongoose.Schema

let schema = new Schema({
  species: { type: String },
  farmId: { type: String },
  img: { type: String },
  name: { type: String }
})

export default mongoose.model('animal', schema)