import express from "express";
import {
    addDivsect,
    deleteDivsect,
    getDivsects,
    getDivsectById,
    editDivsect,
} from "../controllers/divsect.js";
import { verifyAdmin } from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post('/add', addDivsect);

//UPDATE
router.put("/:id", verifyAdmin, editDivsect);
//DELETE
router.delete("/:id", verifyAdmin, deleteDivsect);
//GET

router.get("/find/:id", getDivsectById);
//GET ALL

router.get("/", getDivsects);

export default router;