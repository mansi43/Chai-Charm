import mongoose from "mongoose";
const {Schema,model}= mongoose;

const UserSchema = new Schema({
    email:{type:String, required:true},
    name:{type:String,},
    username:{type:String, required:true},
    profilepic:{type:String},
    coverpic:{type:String},
    razorpayKey:{type:String},
    razorpaySecret:{type:String},
    createAt:{type:Date, default:Date.now},
    updateAt:{type:Date, default:Date.now},
})

export default mongoose.models.User || model ("User",UserSchema);