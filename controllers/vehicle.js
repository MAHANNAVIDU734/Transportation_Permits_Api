import Vehicle from "../models/Vehicle.js";


//add Vehicle
export const addVehicle = async(request, response) => {
    const vehicle = request.body;

    const newVehicle = new Vehicle(vehicle);
    try {
        await newVehicle.save();
        response.status(201).json(newVehicle);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}


//edit Timwood
export const editVehicle = async (request, response) => {
    let vehicle = request.body;

    const editVehicle = new Vehicle(vehicle);
    try{
        await Vehicle.updateOne({_id: request.params.id}, editTimwood);
        response.status(201).json(editVehicle);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

//Delete Vehicle
export const deleteVehicle = async (request, response) => {
    try{
        await Vehicle.deleteOne({_id: request.params.id});
        response.status(201).json("Vehicle deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}


// Get a user by id
export const getVehicleById = async (request, response) => {
    try {
        const vehicle = await Vehicle.findById(request.params.id);
        response.status(200).json(vehicle);
    } catch (err) {
        response.status(404).json({ message: error.message })
    }
}


// Get all get Users
export const getVehicles  = async (request, response) => {
    try{
        const vehicles = await Vehicle.find();
        response.status(200).json(vehicles);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}