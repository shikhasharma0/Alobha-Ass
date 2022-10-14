const userModel = require("../model/userModel");
const productModel= require("../model/userModel");
const cartModel = require("../model/cartModel");
const validation = require("../validation/validation.js");


const createCart = async function(req, res)
{
        try {
            const userId = req.body.userId
           // const productId = req.body
            const requestBody = req.body
             let items =req.body.items
             console.log(req.body.items);

        
            if (!validation.isValidRequestBody(requestBody)) {
                return res.status(400).send({ status: false, msg: "request body is unvalid" })
            
            }
            if (!validation.isValidObjectId(userId)) {
                return res.status(400).send({ status: false, message: `${userId} is not a valid user id` })
            }
            
            let checkUser=await userModel.findById(userId)
            if(!checkUser){
               res.status(404).send({status: false, msg:"User Not Found"})
            }
            
            console.log(typeof(items))

            //let item =JSON.parse(req.body.items)

            if(!validation.isValidObjectId(items[0].productId)){
                return res.status(400).send({status: false, message: 'productId is not vaild'})
            }
            items.map(items=>console.log(items))
          
            let checkProduct=await productModel.findById(items[0].productId)
             if(!checkProduct){
                res.status(404).send({status: false, msg:"Product Not Found"})
             }

                let cart =[]
                let cartdetails = {userId:userId,items:cart,totalPrice:totalItems}

                
        let productAddToCart=await cartModel.create(cartdetails)
        return res.status(201).send({status:true,msg:"Product Added To Cart Successful",data:productAddToCart})


 }catch (error) {
        return res.status(500).send({status: false,message: error.message});
    }
}

module.exports.createCart = createCart





