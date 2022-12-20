import express from "express";
import {
    deleteUser,
    getUserById,
    getUsers,
    editUser
} from '../controllers/user.js';
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();


router.put("/:id", verifyUser, editUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET
router.get("/:id", verifyUser, getUserById);
//GET_ALL
router.get("/", verifyAdmin, getUsers);

export default router