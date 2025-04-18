// import { type } from "express/lib/response";
import mongoose from "mongoose";

const schema = new mongoose.Schema({
      name: {
        type: String,
        require: true
      },
      email: {
        type: String,
        require: true,
        unique: true
      },
      password: {
        type: String,
        require: true
      },
      followers:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    following :[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
},{
   timestamps: true
});

export const User = mongoose.model("User", schema);