import User from "../models/User.js";

//edit user
export const editUser = async(request, response) => {
    let user = request.body;

    const editUser= new User(user);
    try {
        await User.updateOne({ _id: request.params.id }, editUser);
        response.status(201).json(editUser);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

//Delete User
export const deleteUser = async (request, response) => {
    try{
        await User.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
// Get a user by id
export const getUserById = async (request, response) => {
    try {
        const user = await User.findById(request.params.id);
        response.status(200).json(user);
    } catch (err) {
        response.status(404).json({ message: error.message })
    }
}


// Get all get Users
export const getUsers  = async (request, response) => {
    try{
        const users = await User.find();
        response.status(200).json(users);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}