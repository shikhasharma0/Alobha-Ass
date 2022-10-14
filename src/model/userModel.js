const mongosee = require("mongoose");

const UserSchema = mongosee.Schema(

        {
                fname: {
                        type: String,
                        required: true,
                        trim: true
                },

                lname: {
                        type: String,
                        required: true,
                        trim: true
                },

                email: {
                        type: String,
                        unique: true,
                        required: true,
                        trim: true
                },


                phone: {
                        type: String,
                        unique: true,
                        required: true
                },

                password: {
                        type: String,
                        min: 8,
                        max: 15,
                        required: true
                },
        }, { timestamps: true }
)

module.exports = mongosee.model('User', UserSchema)