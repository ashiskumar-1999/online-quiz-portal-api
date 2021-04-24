import { Router } from 'express'
import controllers from './branches.controller'

const router = Router()

// api/quiz
router
  .route('/')
  .get(controllers.getOne)
  .get(controllers.getMany)
  .post(controllers.createOne)

// api/quiz/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router
