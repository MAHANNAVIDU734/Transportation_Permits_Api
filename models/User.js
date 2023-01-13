import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
        firstname: {
                type: String,
                required: true,
                unique: true,
            },
        lastname: {
                type: String,
                required: true,
                unique: true,
            },
        username: {
                type: String,
                required: true,
                unique: true,
            },
        email: {
                type: String,
                required: true,
                unique: true,
            },
        officerType: [{ type: String, default: "officer" }],
        divsect:  [{type: String, default: "divsect"}],   
        img: {
            type: String,
        },
        phone: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true });

export default mongoose.model("User", UserSchema)