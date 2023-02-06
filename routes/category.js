import { Router } from "express"
import * as categoryCtrl from "../controllers/category.js"
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'


const router = Router ()

router.use(decodeUserFromToken)
router.post('/task/:id/categories', checkAuth, categoryCtrl.createCategory) 

export { router }
