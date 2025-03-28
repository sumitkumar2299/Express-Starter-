const express = require('express');
const { addProduct, getproduct, deleteProduct } = require('../Controllers/ProductController');

const uploader = require('../middlewares/multerMiddleware');

const productRouter = express.Router();

productRouter.post('/',uploader.single('productImage'),addProduct);
productRouter.get('/:id',getproduct);
productRouter.delete('/:id',deleteProduct);


module.exports = productRouter;