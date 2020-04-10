import * as mongoose from "mongoose"
import { validateZipCode } from "../common/validators";
import { hashPassword } from "../middlewares/bcrypt.service";

export interface User extends mongoose.Document {
    name: string,
    email: string,
    password: string
}

const userSchema = new mongoose.Schema( {
    name:   {
        type: String,
        required: true,
        maxlength: 80,
        minlength: 3
    },
    email:   {
        type: String,
        required: true,
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    password:   {
        type: String,
        required: true,
        select: false
    },
    gender:     {
        type: String,
        required: false,
        enum: ["Male", "Female", "Transgender"]
    },
    zip_code:   {
        type: String,
        required: false,
        validate: {
            validator: validateZipCode,
            message: "{PATH}: Invalid Zip Code ({VALUE})"
        }
    }
} );

const saveHashed = function ( next ) {
    const user: User = this;
    if ( !user.isModified("password") ) next();
    else {
        hashPassword( user, next )
    }
};

const updateMiddleware = function (next){
    if(!this.getUpdate().password){
        next()
    }else{
        hashPassword(this.getUpdate(), next)
    }
};

userSchema.pre( "save",  saveHashed );
userSchema.pre( "findOneAndUpdate", updateMiddleware );
userSchema.pre( "update", updateMiddleware );

export const User = mongoose.model<User>("User", userSchema);