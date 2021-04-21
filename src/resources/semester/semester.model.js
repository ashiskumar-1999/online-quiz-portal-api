const mongoose = require('mongoose')

const semester = new mongoose.Schema({
  semestername: Number,
  subjects: [{ type: String }],
})

export const Semester = mongoose.model('Semester', semester)
