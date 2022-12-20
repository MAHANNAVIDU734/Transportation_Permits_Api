import express from "express";
import {
    addSgsoil,
    deleteSgsoil,
    getSgsoils,
    getSgsoilById,
    editSgsoil,
} from "../controllers/sgsoil.js";
import { verifyAdmin } from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post('/add', addSgsoil);

//UPDATE
router.put("/:id", verifyAdmin, editSgsoil);
//DELETE
router.delete("/:id", verifyAdmin, deleteSgsoil);
//GET

router.get("/find/:id", getSgsoilById);
//GET ALL

router.get("/", getSgsoils);

export default router; 