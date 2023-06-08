const Product = require('../models/product');


// get All Products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}, 'name price');
        res.json(products);
    } catch (err) {
        res.status.json({error: 'An error occurred'})
    }
};



