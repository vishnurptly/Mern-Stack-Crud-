
const userModel = require('../model/UserModel')




 const createPost = async (req,res) => {
    try{
        const user = new userModel(req.body);
        user.save();
        res.status(201).send('User created successfully');
    }
    catch(err){
        res.status(500).json(err)
    }
    

}
module.exports ={createPost};



 const updateUser = async (req,res) =>{
    try{
        const user = await userModel.findById(req.param.id);
        if(!user){
            res.status(404).json('post not found')
        }
        await userModel.findByIdAndUpdate(req.param.id,{$set:req.body})
        res.status(200).json('update successfully')
    }
    catch(err){
        res.status(500).json(err)
    }
}
module.exports ={updateUser};



 const deleteUser = async (req,res) =>{
    try{
        await userModel.findByIdAndDelete(req.param.id);
        res.status(200).json("delete item successfully")

    }
    catch(err){
        res.status(500).json(err)
    }
}
module.exports ={deleteUser};



 const getAllList = async (req,res) =>{
    try{
    await userModel.find()
    res.status(200).json("get all list is successfully")
    }
    catch(err){
        res.status(500).json(err)
    }
}
module.exports ={getAllList};


 const getbyid = async (req,res) =>{
    try{
        const user = await userModel.findById(req.param.id)
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err)
    }

}
module.exports ={getbyid};


