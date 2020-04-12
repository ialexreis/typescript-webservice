import { Server } from "./server/server"
import { clientsRouter } from "./routes/client.routes"
import { usersRouter } from "./routes/user.routes"

const routes = [
  clientsRouter,
  usersRouter
];

const server = new Server();

server.bootstrap(routes).then( serve => {
  console.log("Server is listening on: ", serve.application.address())
} ).catch( error => {
  console.log("Server Failed to start");
  console.error(error);
  process.exit(1)
} );