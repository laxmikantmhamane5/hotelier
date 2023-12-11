import mongoose, { Schema } from "mongoose";

const bookingSchema=new Schema({
    rno:Number,
    cno:Number,
    advanceAmout:Number,
    pendingAmout:Number,
    numOfDay:Number
});

export const Booking=mongoose.model("booking",bookingSchema);