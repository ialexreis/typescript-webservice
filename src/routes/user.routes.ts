import * as restify from "restify"
import { User } from "../http/models/user.model"
import { ModelRoutes } from "../middlewares/model.routes"

class UsersRoutes extends ModelRoutes<User> {

    constructor() {
        super(User);
        this.on( "beforeRender", document => {
            document.password = undefined
        } )
    }

    applyRoutes(application: restify.Server){
        
        application.get("/users", this.findAll );
        application.post("/users" , this.store );
        application.get("/users/:id", [ this.validateId, this.findById ]);
        application.put("/users/:id", [ this.validateId, this.findByIdAndUpdate ]);
        application.patch("/users/:id", [ this.validateId, this.findByIdAndUpdate ]);
        application.del("/users/:id", [ this.validateId, this.findByIdAndDelete ])

    }
}

export const usersRouter = new UsersRoutes();