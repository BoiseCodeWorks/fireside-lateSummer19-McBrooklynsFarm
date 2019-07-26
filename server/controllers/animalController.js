
import express from 'express'
import Animal from '../services/animalService'

export default class animalController {
  constructor() {
    this.router = express.Router()
      .post('', this.create)
      .get('', this.getAll)
      .get('/:id', this.getById)
      .put('/:id', this.put)
      .delete('/:id', this.delete)
  }
  async create(req, res, next) {
    try {
      let animal = await Animal.create(req.body)
      res.send(animal)
    }
    catch (err) { next(err) }
  }
  async getAll(req, res, next) {
    try {
      let animal = await Animal.find({})
      res.send(animal)
    }
    catch (err) { next(err) }
  }

  async getById(req, res, next) {
    try {
      let animal = await Animal.findById(req.params.id)
      res.send(animal)
    }
    catch (err) { next(err) }
  }
  async put(req, res, next) {
    try {
      let animal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.send(animal)
    }
    catch (err) { next(err) }
  }

  async delete(req, res, next) {
    try {
      await Animal.findOneAndRemove({ _id: req.params.id })
      res.send("succesfully deleted!")
    }
    catch (err) { next(err) }
  }

}


