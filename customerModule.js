import mongoose, { Schema } from "mongoose";

const customerSchema=new Schema({
    cno:Number,
    name:String,
    contact:Number,
    adharno:Number,
    age:Number,
    numOfPersons:Number
});

export const Customer=mongoose.model("customer",customerSchema);