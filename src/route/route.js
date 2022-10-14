const express=require('express')
const router=express.Router()
const userController = require("../controller/userController")
const cartController = require("../controller/cartController")
const productController = require("../controller/productController")


router.get('/test',function(req,res){
    res.send('working')
})


router.post("/userlogin", userController.createUser);
router.post("/product", productController.productCreation);
router.post("/cart", cartController.createCart);


module.exports = router

