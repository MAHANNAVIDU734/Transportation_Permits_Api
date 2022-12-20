import Sgsoil from "../models/Sgsoil.js";


//add Sgsoil
export const addSgsoil = async(request, response) => {
    const sgsoil = request.body;

    const newSgsoil = new Sgsoil(sgsoil);
    try {
        await newSgsoil.save();
        response.status(201).json(newSgsoil);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}


//edit Sgsoil
export const editSgsoil = async (request, response) => {
    let sgsoil = request.body;

    const editSgsoil= new Sgsoil(sgsoil);
    try{
        await Sgsoil.updateOne({_id: request.params.id}, editSgsoil);
        response.status(201).json(editSgsoil);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

//Delete Sand, Soil, Gravel Permit
export const deleteSgsoil = async (request, response) => {
    try{
        await Sgsoil.deleteOne({_id: request.params.id});
        response.status(201).json("Sand, Gravel, Soil permit deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a user by id
export const getSgsoilById = async (request, response) => {
    try{
        const sgsoil = await Sgsoil.findById(request.params.id);
        response.status(200).json(sgsoil);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Get all timwoods
export const getSgsoils  = async (request, response) => {
    try{
        const sgsoils = await Sgsoil.find();
        response.status(200).json(sgsoils);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}