import { Branch } from '../Branch/branch.model'
import { Subject } from '../subject/subject.model'
const mongoose = require('mongoose')

const semesterSchema = new mongoose.Schema({
  name: [{ type: String }],
  branch: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'branch',
  },
  subject: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'subject' }],
})

export const Semester = mongoose.model('Semester', semesterSchema)
