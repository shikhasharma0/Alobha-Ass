const UserModel = require("../model/userModel.js");
const validation = require("../validation/validation.js")


const createUser = async function (req, res) {

    try {

        //let files = req.files;
        
        let userDetails = req.body
        
        if (!validation.isValidRequestBody(userDetails)) {
            return res.status(400).send({ status: false, message: "please provide valid user Details" })
        }
            
        if (!validation.isValid(userDetails.fname)) {
            return res.status(400).send({ status: false, message: "fname is required" })
        }
   
        if (!validation.isValid(userDetails.lname)) {
            return res.status(400).send({ status: false, message: "lname is required" })
        }
      

    if (!validation.isValid(userDetails.email)) {
        return res.status(400).send({ status: false, message: "Email-ID is required" })
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userDetails.email))
        return res.status(400).send({ status: false, message: "Invalid Email id." })

    const checkEmailFromDb = await UserModel.findOne({ email :userDetails.email})

    if (checkEmailFromDb) {
        return res.status(400).send({ status: false, message: `emailId is Exists. Please try another email Id.` })
    }

    if (!validation.isValid(userDetails.phone)) {
        return res.status(400).send({ status: false, message: "phone number is required" })
    }

    if (!(/^(\+\d{1,3}[- ]?)?\d{10}$/).test(userDetails.phone))
        return res.status(400).send({ status: false, message: "Phone number must be a valid Indian number." })

    const checkPhoneFromDb = await UserModel.findOne({ phone:userDetails.phone })

    if (checkPhoneFromDb) {
        return res.status(400).send({ status: false, message: `${userDetails.phone} is already in use, Please try a new phone number.` })
    }

    if (!validation.isValid(userDetails.password)) {
        return res.status(400).send({ status: false, message: "password is required" })
    }

    if (userDetails.password.length < 8 || userDetails.password.length > 15) {
        return res.status(400).send({ status: false, message: "Password must be of 8-15 letters." })
    }
    
    const saveUserInDb = await UserModel.create(userDetails);

    return res.status(201).send({ status: true, message: "user created successfully!!", data: saveUserInDb });

  }catch(err){

        return res.status(500).send({status: false,error: err.message})

    }

}
module.exports.createUser = createUser;
