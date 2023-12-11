import mongoose, { Schema } from "mongoose";

const roomsSchema=new Schema({
    rno:Number,
    type:String,
    capacity:Number,
    price:Number,
    availability:String
});

export const Rooms=mongoose.model("rooms",roomsSchema);