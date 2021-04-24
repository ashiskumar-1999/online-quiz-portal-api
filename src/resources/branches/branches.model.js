const mongoose = require('mongoose')

const branchesSchema = new mongoose.Schema({
  name: String,
})

export const Branches = mongoose.model('Branches', branchesSchema)
