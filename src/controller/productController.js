const productModel = require('../model/productModel')
const validation = require('../validation/validation')


const productCreation = async function (req, res) {
    try {
    let files = req.files;
    let productDetails = req.body;
    let {product_name,Category,Sub_Category,color,size} = productDetails

    if (!validation.isValidRequestBody(productDetails)) {
        return res.status(400).send({ status: false, message: "Please provide valid product details" })
    }
    
    if (!validation.isValid(product_name)) {
        return res.status(400).send({ status: false, message: "product_name is required" })
    }

    
    if (!validation.isValid(Category)) {
        return res.status(400).send({ status: false, message: "Category is required" })
    }

    if (!validation.isValid(Sub_Category)) {
        return res.status(400).send({ status: false, message: "Sub_Category is required" })
    }

    if (!validation.isValid(color)) {
        return res.status(400).send({ status: false, message: "Color is required" })
    }
    if (!validation.isValid(size)) {
        return res.status(400).send({ status: false, message: "Size is required" })
    }
    // if ((Number(color))) {
    //     return res.status(400).send({ status: false, message: "Price Is a Valid Number" })
    // // }

    // if ((Number(size))) {
    //     return res.status(400).send({ status: false, message: "Price Is a Valid Number" })
    // }
    
    const saveProductDetails = await productModel.create(productDetails)

    return res.status(201).send({ status: true, message: "Product added successfully.", data: saveProductDetails })

}catch(err){

    return res.status(500).send({status: false,error: err.message})

}
}

module.exports.productCreation = productCreation