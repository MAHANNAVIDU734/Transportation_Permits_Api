import mongoose from 'mongoose';
const { Schema } = mongoose;

const DivsectSchema = new mongoose.Schema({
    divsectname: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    district: {
        type: [String],
        required: true,
    },
    province: {
        type: [String],
        required: true,
    },
    phone: {
        type: String,
        required: true,
    }
}, { timestamps: true });


export default mongoose.model("Divsect", DivsectSchema)
