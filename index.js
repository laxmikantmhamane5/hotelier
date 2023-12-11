import  express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import  Jwt  from "jsonwebtoken";
import bcrypt from"bcrypt";
const app = express();
app.use(cors());
app.use(express.json());

import {Customer} from './modules/customerModule.js';
import { custRout } from "./router/customerRouter.js";

import { Rooms } from "./modules/roomsModule.js";
import { roomRout } from "./router/roomsRouter.js";

import { Booking } from "./modules/bookinModule.js";
import { bookRoutes } from "./router/bookingRouter.js";


import { Admin } from "./modules/adminModule.js";
import { adminRout } from "./router/adminRouter.js";

const connectDb=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/room_booking');
        console.log("Database connection created !")
    } catch (error) {
        console.log(error);
    }
}

function verifyToken(request,response,next){
    const header=request.get('Authorization');
    if (header) {
        const token=header.split(" ")[1];
        Jwt.verify(token,"secret1234",(error,payload)=>{
            if (error) {
                response.send({message:"Invalid token"});
            }
            else{
                next();
            }
        });
    } else {
        response.send({message:"Please login first"});
    }
    
}
custRout(app,Customer,cors);
roomRout(app,Rooms,cors);
bookRoutes(app,Booking,cors);
adminRout(app,Admin,cors,Jwt);


app.listen(4000,()=>{
    console.log("Server has started on 4000");
    connectDb();
});