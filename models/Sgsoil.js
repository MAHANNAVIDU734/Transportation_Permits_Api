import mongoose from 'mongoose';
const { Schema } = mongoose;

const SgsoilSchema = new mongoose.Schema({
    QR_Code: { 
        type: mongoose.Types.ObjectId 
    },
    Serial_No: { 
        type: mongoose.Types.ObjectId 
    },
    name_of_The_Licener: { 
        type: String, 
        required: true 
    },
    national_Identity_Card_No: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    where_extracted: {
         type: String, 
         required: true 
        },
    grama_Seva_Division: { 
        type: String, 
        required: true 
    },
    divisional_Secretariat: { 
        type: [String]
    },
    district: {
        type:[String]
    },
    type_of_Mineral: { 
        type: String, 
        required: true 
    },
    vehicle_No: {
        type: String, 
        required: true 
    },
    quantity_cubes: {
         type: String, 
         required: true 
        },
    destination: {
         type: String, 
         required: true 
        },
    reason: {
        type: String, 
        required: true 
    },
    permitted_to_mine: { 
        type: Boolean, 
        required: true 
    },
    permitted_to_mine_Date:  {
         type: String,
         required: true 
        },
    permitted_to_Mine_Time:  {
         type: String,
         required: true 
        },
    permitted_to_Mine_Start: {
         type: String,
         required: true 
        },
    permitted_to_Mine_End:  {
         type: String,
         required: true 
        },
    permitted_to_Transport: { 
        type: Boolean, 
        required: true 
    },
    permitted_to_Transport_Date:  { 
        type: String,
        required: true
    },
    permitted_to_Transport_Time:  { 
        type: String,
        required: true 
    },
    permitted_to_Transport_Start: { 
        type: String,
        required: true 
    },
    permitted_to_Transport_EndTime:  { 
        type: String,
        required: true 
    },
    signature_and_seat_of_Authorised_Officer: { 
        type: Boolean, 
        required: true 
    },
    grama_Seva_Niladhari_Approved: { 
        type: Boolean, 
        required: true 
    },
})

export default mongoose.model("Sgsoil", SgsoilSchema)