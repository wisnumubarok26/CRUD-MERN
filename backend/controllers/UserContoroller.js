import User from "../models/UserModel.js"

export const getUser = async(req,res)=>{
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({
            massage : error.massage
        })
    }
}

export const getUserById = async(req,res)=>{
    try {
        const user = await User.findByPk(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({
            massage : error.massage
        })
    }
}

export const saveUser = async(req,res)=>{
    const user = new User(req.body)
    try {
        const insertUser = await user.save();
        res.status(201).json(insertUser)
        // res.json(user);
    } catch (error) {
        res.status(400).json({
            massage : error.massage
        })
    }
}

export const UpdateUser = async(req,res)=>{    
    try {
        const userId = req.params.id;
        const { name, email, gender } = req.body; // Ambil nilai yang ingin diperbarui dari body request
        const updateUser = await User.update(
            { name, email, gender }, // Nilai yang ingin diperbarui
            { where: { id: userId } } // Kriteria untuk menentukan entri yang akan diperbarui
        );
        res.status(200).json(updateUser)
        // res.json(user);
    } catch (error) {
        res.status(400).json({
            massage : error.massage
        })
    }
}

export const DeleteUser = async(req,res)=>{    
    try {
        const userId = req.params.id;
        const deleteUser = await User.destroy({
            where: { id: userId }
        });
        res.status(200).json(deleteUser)
        // res.json(user);
    } catch (error) {
        res.status(400).json({
            massage : error.massage
        })
    }
}
