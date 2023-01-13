import mongoose from 'mongoose';
const { Schema } = mongoose;

const VehicleSchema = new mongoose.Schema({
    Vehicle_No_Plate_Id: {
        type: String,
        required: true,
        unique: true,
    },
    Vehicle_Owner_Name: {
        type: String,
        required: true,
        unique: true,
    },
    Vehicle_Type: {
        type: [String],
        required: true
    },
    country: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
}, { timestamps: true })

export default mongoose.model("Vehicle", VehicleSchema)