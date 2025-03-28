// const product = require('../Schema/ProductSchema');

// async function createProduct(productDetails){
//     try{
//         const response = await product.create({

//         });
//         return response;
        


//     }catch(error){
//         console.log(error)
//     }
// }
// module.exports = {
//     createProduct

// }







// sanket sir project


const Product = require('../schema/productSchema');
const BadRequestError = require('../utils/badRequestError');
const internalServerError = require('../utils/InternalServerError');

 async function createProduct(productDetails) {
     try {
         const response = await Product.create(productDetails);
         return response;
     } catch(error) {
        if(error.name === "ValidationError"){
            const errorMessageList = Object.keys(error.errors).map((property)=>{
                console.log(property, error.errors[property].message);
            })
            
            throw new BadRequestError(errorMessageList);
        }
        console.log(error);
        throw new internalServerError();       
     }
 }



async function getproductById(productId){
    try{
        const product = await Product.findById(productId);
        return product;

    }catch(error){
        console.log(error);
        throw new internalServerError();

    }
}

async function deleteProductById(productId){
    try{
        const response = await Product.findById(productId);
    return true;
    } catch(error){
        console.log(error);
    }   
}



 
 module.exports = {
     createProduct,
     getproductById,
     deleteProductById
 }