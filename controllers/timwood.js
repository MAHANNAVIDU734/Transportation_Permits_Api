import Timwood from "../models/Timwood.js";

//add Timwood
export const addTimwood = async(request, response) => {
    const timwood = request.body;

    const newTimwood = new Timwood(timwood);
    try {
        await newTimwood.save();
        response.status(201).json(newTimwood);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}
//edit Timwood
export const editTimwood = async (request, response) => {
    let timwood = request.body;

    const editTimwood = new Timwood(timwood);
    try{
        await Timwood.updateOne({_id: request.params.id}, editTimwood);
        response.status(201).json(editTimwood);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
//Delete Timber wood Permit
export const deleteTimwood = async (request, response) => {
    try{
        await Timwood.deleteOne({_id: request.params.id});
        response.status(201).json("Timber wood permit deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a user by id
export const getTimwoodById = async (request, response) => {
    try{
        const timwood = await User.findById(request.params.id);
        response.status(200).json(timwood);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}


// Get all timwoods
export const getTimwoods  = async (request, response) => {
    try{
        const timwoods = await Timwood.find();
        response.status(200).json(timwoods);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}
