const Cubes = require('../models/cubesModel.js');

const getCubes = async(req, res) =>{
    try {
        const cubes = await Cubes.find({});
        res.status(200).json(cubes);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getCube = async(req, res) =>{
    try {
        const {id} = req.params;
        const cube = await Cubes.findById(id);
        res.status(200).json(cube);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createCube = async(req, res)=>{
    try {
        const cube = await Cubes.create(req.body);
        res.status(200).json({cube});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const updateCube = async(req, res)=>{
    try {
        const {id} = req.params;
        const cube =await Cubes.findByIdAndUpdate(id, req.body)
        if (!cube){
            return res.status(404).json({message: "User can not be found!"})
        }
        const updatecube = await Cubes.findById(id); 
        res.status(200).json(updatecube);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const deleteCube = async(req, res)=>{
    try {
        const {id} = req.params;
        const cube =await Cubes.findByIdAndDelete(id, req.body)
        if (!cube){
            return res.status(404).json({message: "User can not be found!"})
        }
        res.status(200).json({message: "User Deleted Successfully"});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

module.exports = {
    getCubes,
    getCube,
    createCube,
    updateCube,
    deleteCube,
  };