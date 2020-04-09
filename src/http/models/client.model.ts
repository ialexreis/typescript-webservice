import * as mongoose from "mongoose";
import { validateZipCode } from "../validators";

export interface Client extends mongoose.Document{
    name: string,
    birth_date: string,
    nif: bigint,
    phone: bigint,
    email: string,
    company: string,
    address: string,
    city: string,
    zip_code: string
};


const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    birth_date: {
        type: String,
        required: true,
        maxlength: 10
    },
    nif: {
        type: BigInt,
        required: true,
        maxlength: 9
    },
    phone: {
        type: BigInt,
        required: true,
        maxlength: 9
    },
    email:   {
        type: String,
        required: true,
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    company: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    zip_code:   {
        type: String,
        required: false,
        validate: {
            validator: validateZipCode,
            message: "{PATH}: Invalid Zip Code ({VALUE})"
        }
    }
});

export const Client = mongoose.model<Client>("Client", clientSchema);