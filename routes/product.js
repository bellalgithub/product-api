const express = require('express');
const {getAllProducts} = require("../controllers/product");

const router = express.Router();

//Get all products
router.get('/products', getAllProducts);


module.exports = router;