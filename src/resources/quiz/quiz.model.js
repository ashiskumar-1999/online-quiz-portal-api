import { User } from '../user/user.model'

const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    options: [
      {
        type: String,
        required: true,
      },
    ],
    answer: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
    },
  },
  { timestamps: true }
)

quizSchema.index({ user: 1, question: 1 }, { unique: true })

export const Quiz = mongoose.model('quiz', quizSchema)
