import express from "express";
import {
    addVehicle,
    deleteVehicle,
    getVehicleById,
    getVehicles,
    editVehicle
} from '../controllers/vehicle.js';
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

router.post("/", verifyAdmin, addVehicle);
router.put("/:id", verifyUser, editVehicle);
//DELETE
router.delete("/:id", verifyUser, deleteVehicle);
//GET
router.get("/:id", verifyUser, getVehicleById);
//GET_ALL
router.get("/", verifyAdmin, getVehicles);

export default router
