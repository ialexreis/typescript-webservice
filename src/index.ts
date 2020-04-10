import { Server } from "./server/server"
import { clientsRoutes } from "./routes/client.routes"
import { usersRouter } from "./routes/user.routes"

const routes = [
  clientsRoutes,
  usersRouter
];

const server = new Server();

server.bootstrap(routes).then( server => {
  console.log("Server is listening on: ", server.application.address())
} ).catch( error => {
  console.log("Server Failed to start");
  console.error(error);
  process.exit(1)
} );