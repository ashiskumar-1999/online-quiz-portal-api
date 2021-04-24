import { User } from '../users/users.model'

const mongoose = require('mongoose')

const quizesSchema = new mongoose.Schema(
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

/* It's a compound index that sets the project name to be unique within user's own scope.
   In other words, duplicate project name is not allowed in user's own profile. 
   The 1 is just the sorting order it tell in what order do you want to sort this fields on the index itself.
   And the order of the indexes matter. If we change the order it changes the behaviour.
   Generally, objects don't have order but this weird behaviour is because, Mongoose uses something called BSON
   where order matters.
*/

quizesSchema.index({ user: 1, question: 1 }, { unique: true })

export const Quizes = mongoose.model('quizes', quizesSchema)
