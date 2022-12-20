import mongoose from 'mongoose';
const { Schema } = mongoose;

const TimwoodSchema = new mongoose.Schema({
    QR_Code: { 
        type: mongoose.Types.ObjectId 
    },
    Serial_No: { 
        type: mongoose.Types.ObjectId 
    },
    Name_of_the_applicant: 
    { 
        type: String, 
        required: true 
    },
    Permanent_address: { 
        type: String, 
        required: true 
    },
    National_ID_card_No: { 
        type: String, 
        required: true 
    },
    How_items_were_obtained_someone_else: { 
        type: Boolean, 
        required: true 
    },
    Name_of_the_person_who_sold_the_timber_timber: { 
        type: String, 
        required: true 
    },
    Grama_Seva_Division: { 
        type: String, 
        required: true 
    },
    Name_of_the_land_on_which_the_tree_timber_was_obtained: { 
        type: String, 
        required: true 
    },
    Deed_number: { 
        type: String, 
        required: true 
    },
    Date_of_registration: { 
        type: [Date], 
        default: Date 
    },
    Boundary_of_Lands_North: { 
        type: Number, 
        required: true 
    },
    Boundary_of_Lands_East: { 
        type: Number, 
        required: true 
    },
    Boundary_of_Lands_West: { 
        type: Number, 
        required: true 
    },
    Boundary_of_Lands_South: { 
        type: Number, 
        required: true 
    },
    Land_type: { 
        type: String, 
        required: true 
    },
    Land_type_No: { 
        type: String, 
        required: true 
    },
    Land_Issued_date: { 
        type: [Date]
    },
    Area_of_the_land: { 
        type: String, 
        required: true 
    },
    hect: { 
        type: Number 
    },
    acres: { 
        type: Number
    },
    Rudd: { 
        type: Number 
    },
    Perches: { 
        type: Number 
    },
    cutdown_or_timber: { 
        type: String, 
        required: true 
    },
    Name_and_address_of_the_institution_from_which_the_timber_was_purchased: { 
        type: String, 
        required: true 
    },
    The_business_is_registered_with_the_Forest_Department: { 
        type: Boolean, 
        required: true 
    },
    Description_of_timber_trees_intended_for_transportation_Tree_type: { 
        type: String, 
        required: true 
    },
    Height_meters: { 
        type: Number, 
        required: true 
    },
    Back_Level_Round_m: { 
        type: Number, 
        required: true 
    },
    Age_of_trees_gross_age: { 
        type: Number, 
        required: true 
    },
    Details_of_trunks_timber_or_wood_products_Type: { 
        type: String, 
        required: true 
    },
    Height: { 
        type: Number, 
        required: true 
    },
    Round_Width: { 
        type: Number, 
        required: true 
    },
    Thickness_mm: { 
        type: Number, 
        required: true 
    },
    Details_and_number_of_pieces: { 
        type: String, 
        required: true 
    },
    Age_Duration_Used_Years: { 
        type: Number, 
        required: true 
    },
    Date_for_transportation_of_timber: { 
        type: Date,
        default: Date 
    },
    Vehicle_number: { 
        type: String, 
        required: true 
    },
    Location_intended_for_transportation: { 
        type: String, 
        required: true 
    },
    Where_the_transport_will_end: { 
        type: String, 
        required: true 
    },
    Which_route_will_be_transported: { 
        type: String, 
        required: true 
    },
    The_distance_between_the_place_of_transport_is_km: { 
        type: Number, 
        required: true 
    },
    Timber_Purchase_Receipt_Bills_Original_Timber_Transport_License: { 
        type: Boolean, 
        required: true 
    },
    Land_Deed_Land_Permits_Major_Notes_and_Land_Plan_Gazette_Notifications: { 
        type: Boolean, 
        required: true 
    },
    Disposal_license: { 
        type: Boolean, 
        required: true 
    },
    Receipt_of_trees_shoots_bark_timber_related_to_the_application: { 
        type: Boolean, 
        required: true 
    },
    Environmental_Impact_Assessment_Report: { 
        type: Boolean, 
        required: true 
    },
    Date: { 
        type: [Date], 
        default: Date 
    },
    Grama_Niladari_Signature: { 
        type: Boolean, 
        required: true 
    },
    Approved: { 
        type: Boolean, 
        required: true 
    },
})

export default mongoose.model("Timwood", TimwoodSchema)