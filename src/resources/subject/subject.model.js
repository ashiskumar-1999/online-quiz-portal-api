import { Semester } from '../semester/semester.model'
import { Branch } from '../Branch/branch.model'
const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({
  name: [{ type: String }],
  branch: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'branch',
  },
  semester: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'semester',
  },
})

export const Subject = mongoose.model('Subject', subjectSchema)
