// const cloudinary = require('../config/cloudinaryConfig');
// const ProductRepository = require('../Repositories/ProductRepository')
// const fs = require('fs/promises')

// async function createProduct(productDetails){
//     // we should check if an image is coming to create the product , then we should first
//     // update on cloudinary 

//     const imagePath = productDetails.imagePath;
//     if(imagePath)
//         try{
//             const cloudianryResponse = await cloudinary.uploader.upload(imagePath);
//             var productImage = cloudianryResponse.secure_url;
//             await fs.unlink(imagePath);
            
//         }catch(error){
//             console.log(error);
//             throw{reason:'not able to create product',statusCode:500}
//         }

    
//     // Then use the url from cloudinary and other product details to add in db
//     const product = await ProductRepository.createProduct({
//         ...productDetails,
//         productImage:productImage
//     });

//     if(!product){
//         throw{reason:'not able to create product',statusCode: 500}
//     }

//     return product;


// }

// module.exports = {
//    createProduct
// }






// sanket sir project 


const cloudinary = require('../config/cloudinaryConfig');
 const ProductRespository = require("../Repositories/ProductRepository");
 const fs = require('fs/promises');
const internalServerError = require('../utils/InternalServerError');
const NotFoundError = require('../utils/notFoundError');
 
 async function createProduct(productDetails) {
     // 1. We should check if an image is coming to create the product, then we should first upload it on 
     // cloudinary
 
     const imagePath = productDetails.imagePath;
     if(imagePath) {
         try {
             const cloudinaryResponse = await cloudinary.uploader.upload(imagePath);
             var productImage = cloudinaryResponse.secure_url;
             await fs.unlink(imagePath);
         } catch(error) {
             console.log(error);
             throw new internalServerError();
         }
         
     }
 
     // 2. Then use the url from cloudinary and other propduct details to add product in db
     const product = await ProductRespository.createProduct({
         ...productDetails,
         productImage: productImage
     });
     
    //  if(!product) {
    //      throw {reason: 'Not able to create product', statusCode: 500};
    //  }
 
     return product;
 }


 async function getproductById(productId){
    const response = await ProductRespository.getproductById(productId);
    if(!response) {
       throw new NotFoundError('product');
    }
    return response;
 }

 async function deleteProductById(productId){
    const response = await ProductRespository.deleteProductById(productId);
    if(!response){
        throw new NotFoundError('product');
    }
    return response;
 }
 
 
 module.exports = {
     createProduct,
     getproductById,
     deleteProductById
 }