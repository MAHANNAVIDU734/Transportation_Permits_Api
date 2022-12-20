import Divsect from "../models/Divsect.js";


//add Divsect
export const addDivsect = async(request, response) => {
    const divsect = request.body;

    const newDivsect = new Divsect(divsect);
    try {
        await newDivsect.save();
        response.status(201).json(newDivsect);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}


//edit Divsect
export const editDivsect = async(request, response) => {
    let divsect = request.body;

    const editDivsect = new Divsect(divsect);
    try {
        await Divsect.updateOne({ _id: request.params.id }, editDivsect);
        response.status(201).json(editDivsect);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}


//Delete Divsect
export const deleteDivsect = async (request, response) => {
    try{
        await Divsect.deleteOne({_id: request.params.id});
        response.status(201).json("Divisional Secetries deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a user by id
export const getDivsectById = async (request, response) => {
    try{
        const divsect = await Divsect.findById(request.params.id);
        response.status(200).json(divsect);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}


// Get all timwoods
export const getDivsects  = async (request, response) => {
    try{
        const divsects = await Divsect.find();
        response.status(200).json(divsects);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}