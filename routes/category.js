import { Router } from "express"
import * as categoryCtrl from "../controllers/category.js"
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js"


const router = Router ()

router.post('/', createCategory)

export { router }
