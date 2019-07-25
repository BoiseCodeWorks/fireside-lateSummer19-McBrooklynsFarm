import mongoose from 'mongoose'
import Animal from './animalService'

let Schema = mongoose.Schema

let schema = new Schema({
  location: { type: String },
  img: { type: String },
  name: { type: String }
})



schema.pre('findOneAndRemove', function (next) {
  let fId = this._conditions._id
  Promise.all(
    [
      Animal.deleteMany({ farmId: fId })
    ])
    .then(() => next())
    .catch(err => next(err))

})

export default mongoose.model('Farm', schema)