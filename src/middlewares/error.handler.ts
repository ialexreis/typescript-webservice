import * as restify from "restify"

export const errorHandler = (req: restify.Request, resp: restify.Response, err, done) => {

    err.toJSON = () => {
        return {
            error: {
                message: err.message,
                status: err.statusCode
            }
        }
    };

    switch (err.name) {
        case "MongoError":
            if (err.code === 11000 )
                err.statusCode = 400;
            break;
        case "ValidationError":
            err.statusCode = 400;
            const messages: any[] = [];
            for (let name in err.errors) {
                messages.push({message: err.errors[name].message})
            }
            err.toJSON = () => ( {
                errors: messages
            } );
            break
    }

    done()
};