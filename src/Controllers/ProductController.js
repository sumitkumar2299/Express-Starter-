// const product = require('../Schema/ProductSchema');
// const {createProduct} = require('../Services/ProductService');
// // create product function import kiya gya h in the form of destructuring 
// async function addProduct(req,res){
//     try{
//         console.log(req.body);
//         const product = await createProduct({
//             productName:req.body.productName,
//             description:req.body.description,
//             imagePath:req.file.path,
//             price:req.body.price,
//             inStock:req.body.inStock, // if instock is undefined then true will be stored 
//             category:req.body.category, // if category is undefined,veg will be stored 
//         })
//         return res.status(201).json({
//             success:true,
//             message:"successfully created the product",
//             error:{},
//             data:product
//         })
//     }catch(error){
//         console.log(error);
//         return res.status(error.statusCode).json({
//             success:false,
//             message:error.reason,
           
//             data:{},
//             error:error
//         })


//     }
// }
   



// module.exports = {
//     addProduct
// }




// sanket sir file 

const { get } = require('mongoose');
const {createProduct} = require('../Services/ProductService');
const AppError = require('../utils/appError');
const { getproductById, deleteProductById } = require('../Repositories/ProductRepository');
 async function addProduct(req, res) {
     try {
         const product = await createProduct({
             productName: req.body.productName,
             description: req.body.description,
             imagePath: req.file?.path,
             price: req.body.price,
             category: req.body.category, // if category is undefined, veg will be stored
             inStock: req.body.inStock // if inStock is undefined then true will be stored
         });
         return res.status(201).json({
             success: true,
             message: 'Successfully created the product',
             error: {},
             data: product
         });
     } catch(error) {
        if(error instanceof AppError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.reason,
                data: {},
                error: error
            });

        }
         console.log(error);
         return res.status(500).json({
            success:false,
            message:'something went wrong',
            data:{},
            error:error
         })
     }
    
 
 }

 async function getproduct(req,res){
    try{
        const response = await getproductById(req.param.id);
        return res.status(200).json({
            sucsess:true,
            message:"sucsesfully fetched the product",
            error:{},
            data: response,
        })
    } catch(error){
        if(error instanceof AppError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.reason,
                data: {},
                error: error
            });

        }
         console.log(error);
         return res.status(500).json({
            success:false,
            message:'something went wrong',
            data:{},
            error:error

    });
    }
 }


 async function deleteProduct(req,res){
    try{
        const response = await deleteProductById(req.param.id);
        return res.status(200).json({
            sucsess:true,
            message:"sucsesfully deleted the product",
            error:{},
            data:response,
        })
    } catch(error){
        if(error instanceof AppError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.reason,
                data: {},
                error: error
            });

        }
         console.log(error);
         return res.status(500).json({
            success:false,
            message:'something went wrong',
            data:{},
            error:error

    });
    }
 }


// async function getProduct(req, res) {
//     try {
//         const response = await getProductById(req.params.id);
//         return res.status(200).json({
//             success: true,
//             message: 'Successfully fetched the product',
//             error: {},
//             data: response
//         })
//     } catch (error) {
//         if(error instanceof AppError) {
//             return res.status(error.statusCode).json({
//                 success: false,
//                 message: error.message,
//                 data: {},
//                 error: error
//             });
//         }
//         console.log(error);
//         return res.status(500).json({
//             success: false,
//             message: 'Something went wrong',
//             data: {},
//             error: error
//         });
//     }
// }

// async function deleteProduct(req, res) {
//     try {
//         const response = await deleteProductById(req.params.id);
//         return res.status(200).json({
//             success: true,
//             message: 'Successfully deleted the product',
//             error: {},
//             data: response
//         })
//     } catch (error) {
//         if(error instanceof AppError) {
//             return res.status(error.statusCode).json({
//                 success: false,
//                 message: error.message,
//                 data: {},
//                 error: error
//             });
//         }
//         console.log(error);
//         return res.status(500).json({
//             success: false,
//             message: 'Something went wrong',
//             data: {},
//             error: error
//         });
//     }
// }


 
 module.exports = {
     addProduct,
    getproduct,
    deleteProduct
}