import * as restify from "restify"
import { ModelRoutes } from "../middlewares/model.routes"
import { Client } from "../http/models/client.model"

class ClientsRoutes extends ModelRoutes<Client>
{
    constructor(){
        super( Client )
    }

    applyRoutes( application: restify.Server ){
        application.get("/clients", this.findAll );
        application.post("/client" , this.store );
        application.get("/client/:id", [ this.validateId, this.findById ]);
        application.put("/client/:id", [ this.validateId, this.findByIdAndUpdate ]);
        application.patch("/client/:id", [ this.validateId, this.findByIdAndUpdate ]);
        application.del("/client/:id", [ this.validateId, this.findByIdAndDelete ])
    }
}

export const clientsRouter = new ClientsRoutes();