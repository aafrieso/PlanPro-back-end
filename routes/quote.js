import { Router } from "express"
import * as quoteCtrl from "../controllers/quotes.js"
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router ()

router.use(decodeUserFromToken)
router.post('/quotes', checkAuth, quoteCtrl.quoteCategory) 

export { router }
