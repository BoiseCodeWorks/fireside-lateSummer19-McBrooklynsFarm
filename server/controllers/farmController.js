
import express from 'express'
import Farm from '../services/farmService'

export default class farmController {
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
      let farm = await Farm.create(req.body)
      res.send(farm)
    }
    catch (err) { next(err) }
  }
  async getAll(req, res, next) {
    try {
      let farm = await Farm.find({})
      res.send(farm)
    }
    catch (err) { next(err) }
  }

  async getById(req, res, next) {
    try {
      let farm = await Farm.findById(req.params.id)
      res.send(farm)
    }
    catch (err) { next(err) }
  }
  async put(req, res, next) {
    try {
      let farm = await Farm.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.send(farm)
    }
    catch (err) { next(err) }
  }

  async delete(req, res, next) {
    try {
      await Farm.findOneAndRemove({ _id: req.params.id })
      res.send("succesfully deleted!")
    }
    catch (err) { next(err) }
  }

}


