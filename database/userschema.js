import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type : String,
        required: true,
    },
    emailSignup: {
        type : String,
        required: true,
        trim : true,
        unique: true,
        index : true,
        lowercase : true
    }, 
    passwordSignup : {
        type : String,
        required: true,
        trim : true

    }

})
const user = mongoose.model('user', userSchema);
export default user;