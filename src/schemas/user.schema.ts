import { Document, model, Schema } from "mongoose";

export type TUSer = {
    email: string;
    password: string;
    name: string;
    active: boolean;
    verified: boolean;
};

export interface IUser extends TUSer , Document{};

const userSchema = new Schema({
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    name:{
        type: String,
    },
    active:{
        type: Boolean,
        default: true,
    },
    verified:{
        type: Boolean,
        default: false,
    },
},{
    timestamps: true
    
}
);

const User = model("user", userSchema);
export default User;