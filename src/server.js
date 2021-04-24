import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
import { signup, signin, protect } from './utils/auth'
import { connect } from './utils/db'
import userRouter from './resources/user/user.router'
import quizRouter from './resources/quiz/quiz.router'
import branchRouter from './resources/Branch/branch.router'
import semesterRouter from './resources/semester/semester.router'
import subjectRouter from './resources/subject/subject.router'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.post('/api/signup', signup)
app.post('/api/signin', signin)

app.use('/api', protect) // Here we are protecting all the routes that is after "api"
app.use('/api/user', userRouter)
app.use('/api/quiz', quizRouter)
app.use('/api/branch', branchRouter)
app.use('/api/subject', subjectRouter)
app.use('/api/semester', semesterRouter)

export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
