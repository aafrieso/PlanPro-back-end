import { Router } from "express";
import * as taskCtrl from '../controllers/task.js'
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router ()


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', checkAuth, taskCtrl.create)
router.get('/', checkAuth, taskCtrl.index)
// router.get('/:id', checkAuth, taskCtrl.show)




export { router }