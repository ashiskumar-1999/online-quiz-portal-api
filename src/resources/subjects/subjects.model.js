import { Semester } from '../semesteres/semesters.model'
import { Branch } from '../branches/branches.model'
const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({
  name: { type: String },
})

export const Subjects = mongoose.model('Subject', subjectSchema)
