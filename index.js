import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import sgsoilRoute from "./routes/sgsoil.js";
import divsectRoute from "./routes/divsect.js";
import vehicleRoute from "./routes/vehicle.js";
import timwoodRoute from "./routes/timwood.js";
import Connection from './database/db.js';

const app = express();
dotenv.config();

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
};
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/sgsoil", sgsoilRoute);
app.use("/api/timwood", timwoodRoute);
app.use("/api/divsect", divsectRoute);
app.use("/api/vehicle", vehicleRoute);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const PORT = '8000';

Connection(USERNAME, PASSWORD);
 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));



