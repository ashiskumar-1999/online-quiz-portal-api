import { Branch } from '../branches/branches.model'
import { Subject } from '../subjects/subjects.model'
const mongoose = require('mongoose')

const semesterSchema = new mongoose.Schema({
  name: [{ type: String }],
})

export const Semesters = mongoose.model('Semester', semesterSchema)
