import { Router } from "../server/router";
import * as mongoose from "mongoose"
import { NotFoundError } from "restify-errors"

export abstract class ModelRoutes<D extends mongoose.Document> extends Router
{

    constructor( protected  model: mongoose.Model<D> ) {
        super();
    }

    validateId = (req, resp, next)=>{
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            next(new NotFoundError('Document not found'))
        }else{
            next()
        }
    };

    findAll = ( req, resp, next ) => {
        this.model.find().then( this.render( resp, next ) ).catch( next )
    };

    findById = (req, resp, next) => {
        this.model.findById(req.params.id).then( this.render(resp, next) ).catch( next )
    };

    store = (req, resp, next) => {
        const model = new this.model(req.body);
        model.save().then( this.render(resp, next) ).catch( next )
    };

    findByIdAndUpdate = (req, resp, next) => {
        const options = { runValidators: true, new: true };
        this.model.findByIdAndUpdate(req.params.id, { $set: req.body }, options ).then( this.render(resp, next) ).catch( next )
    };

    findByIdAndDelete = (req, resp, next) => {
        this.model.findByIdAndRemove(req.params.id).then( this.render(resp, next) ).catch( next )
    }


}