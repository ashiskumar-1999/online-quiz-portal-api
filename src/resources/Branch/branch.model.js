import { Subject } from '../subject/subject.model'
import { Semester } from '../semester/semester.model'

const mongoose = require('mongoose')

const branchSchema = new mongoose.Schema({
  name: String,
  semester: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'semester',
    },
  ],
  subject: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'subject',
    },
  ],
})

export const Branch = mongoose.model('Branch', branchSchema)
