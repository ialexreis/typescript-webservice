/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(express.json());

/**
 * Server Activation
 */

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
