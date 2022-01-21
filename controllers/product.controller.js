const productService =require("../services/product.service");

const addProductController= (req,res) => {
    console.log("add Product Controller")
    
    try {
        const body = req.body;
        console.log("body on controller",body);
        // const res = await productService.addProductService(body);
        // const {results,error} = res;

        productService.addProductService(body,(err,results) =>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                  success: 0,
                  message: "Database connection errror"
                });
              }
              if(!results){
                return res.json({
                  success:0,
                  message:"Failed to create product"
                })
              }
              return res.status(200).json({
                success: 1,
                data: results
              });
        })
        
    } catch (error) {
        console.log("error",error)
    }

};

const getAllProducts=(req,res) =>{

  try {
       
    productService.getAllProducts((err,results)=>{
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results
      });
    
    });
  } catch (error) {
    console.log("error",error);
  }

};

const updateProduct = (req,res) => {

   try {
    const body = req.body;
       productService.updateProduct(body,(err,results)=>{
        if (err) {
          console.log(err);
          return;
        }
        if(!results){
          return res.json({
            success:0,
            message:"Failed to update product"
          })
        }
        return res.json({
          success: 1,
          message: "updated successfully"
        });
       });
     
   } catch (error) {
     console.log("error",error)
     
   }
};

const deactivateProduct = (req,res) =>{
  try {
    const body = req.body;
    productService.deactivateProduct(body,(err,results)=>{
     if (err) {
       console.log(err);
       return;
     }
     if(!results){
       return res.json({
         success:0,
         message:"Failed to update product state"
       })
     }
     return res.json({
       success: 1,
       message: "updated state successfully"
     });
    });
  } catch (error) {
    console.log("error",error)
    
  }
};

const deleteProduct = (req,res) =>{
  try {
     const data = req.body;
     productService.deleteProduct(data,(err,results)=>{
       if(err){
         console.log(err);
         return;
       }
       if (!results) {
        return res.json({
          success: 0,
          message: "Record Not Found"
        });
      }
      return res.json({
        success: 1,
        message: "user deleted successfully"
      });
     })
  } catch (error) {
    console.log("error",error)
    
  }
};

module.exports={
    addProductController,
    getAllProducts,
    updateProduct,
    deactivateProduct,
    deleteProduct
}