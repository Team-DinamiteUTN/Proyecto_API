const express = require("express");
const {getCubes, getCube, createCube, updateCube, deleteCube} = require('../controllers/cubeController.js');
const router = express.Router();

router.get('/', getCubes);
router.get("/:id", getCube);

router.post("/", createCube);

// update a product
router.put("/:id", updateCube);

// delete a product
router.delete("/:id", deleteCube);



module.exports = router;