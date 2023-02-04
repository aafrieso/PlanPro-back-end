import { Router } from "express";
import * as goalListCtrl from '../controllers/goalList.js';
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router()

router.use(decodeUserFromToken);

router.get("/", checkAuth, goalListCtrl.index);

router.get("/:id", checkAuth, goalListCtrl.show);

router.post("/", checkAuth, goalListCtrl.create);

router.put("/:id", checkAuth, goalListCtrl.update);

router.delete("/:id", checkAuth, goalListCtrl.delete);

export { router }
