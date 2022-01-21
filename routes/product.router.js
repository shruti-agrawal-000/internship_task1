const router =require("express").Router();
const{addProductController, getAllProducts,updateProduct,deactivateProduct,deleteProduct}=require("../controllers/product.controller")
const { checkToken } = require("../middleware/auth");


router.post("/addproduct",checkToken,addProductController);
router.get("/getAllproducts",checkToken,getAllProducts);
router.put("/updateProduct",checkToken,updateProduct);
router.put("/deactivateProduct",checkToken,deactivateProduct);
router.delete("/deleteProduct",checkToken,deleteProduct);


module.exports =router;