import express from "express";
import {
    addTimwood,
    deleteTimwood,
    getTimwoods,
    getTimwoodById,
    editTimwood,
} from "../controllers/timwood.js";
import { verifyAdmin } from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post('/add', addTimwood);

//UPDATE
router.put("/:id", verifyAdmin, editTimwood);
//DELETE
router.delete("/:id", verifyAdmin, deleteTimwood);
//GET

router.get("/find/:id", getTimwoodById);
//GET ALL

router.get("/", getTimwoods);

export default router; 