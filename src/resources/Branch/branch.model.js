const mongoose = require('mongoose')

const branch = new mongoose.Schema({
  branchname: String,
  subjects: [{ type: String }],
})

export const Branch = mongoose.model('Branch', branch)
