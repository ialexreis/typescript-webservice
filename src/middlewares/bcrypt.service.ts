import * as bcrypt from "bcrypt"
import { environment } from "../config/environment";

export const hashPassword = ( obj, next ) => {
    bcrypt.hash( obj.password, environment.security.saltRounds ).then( hash => {
        obj.password = hash;
        next()
    } ).catch( next )
};