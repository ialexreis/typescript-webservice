<p align="center">
<img src="https://raw.githubusercontent.com/adevr/typescript-webservice/master/logo.png" width="334" alt="Typescript Webservice"/>
</p>
<p align="center">
   A base for the development of webservice with Typescript, Restify and Mongoose :package:
</p>

<p align="center">
<img src="http://g.recordit.co/sXAeT4BY4I.gif" alt="Example Request"/>
</p>

<p align="center">
 <a href="https://app.codacy.com/manual/adevr/typescript-webservice?utm_source=github.com&utm_medium=referral&utm_content=adevr/typescript-webservice&utm_campaign=Badge_Grade_Dashboard"><img src="https://api.codacy.com/project/badge/Grade/61f70b41f8ff4eb388d3be9c4ae0c86d" alt="License"></a> 
 <a href="https://github.com/adevr/typescript-webservice/blob/master/LICENSE"><img src="http://img.shields.io/:license-mit-blue.svg" alt="License"></a>
</p>

---

<h2 align="center">Motivation</h2>

<p align="center">
Started this project in order to  help people create webservices with typescript easily. Let's give it a try!
</p>


---


<h2 align="center">Installation</h2>

In order to install this base you must have this requirements on your machine:
> npm ^= 6.13.4

> node ^= 12.14.0

> tsc-cli 

<p>
To install this typescript base you must run the following command under your bash:
</p>

`npm install`

---

<h2 align="center">Clone</h2>

- Clone this repo to your local machine using `https://github.com/adevr/typescript-webservice.git`

---

<h2 align="center">Examples</h2>

- Create New Model

```js
import * as mongoose from "mongoose";
import { validateZipCode } from "../validators";

export interface Lead extends mongoose.Document{
    name: string,
    nif: bigint,
    phone: bigint,
    // ...
}

const leadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    // ...
});

export const Lead = mongoose.model<Lead>("Lead", leadSchema);
```

- Create new routes for the model

```js
import * as restify from "restify"
import { ModelRoutes } from "../middlewares/model.routes"
import { Lead } from "../http/models/lead.model"

class LeadsRoutes extends ModelRoutes<Lead>
{
    constructor(){
        super( Lead )
    }

    applyRoutes( application: restify.Server ){
        application.get("/leads", this.findAll );
    }
}

export const leadsRouter = new LeadsRoutes();
```

- Register the route on server

```js
import { clientsRouter } from "./routes/client.routes"
import { usersRouter } from "./routes/user.routes"
import { leadsRouter } from "./routes/lead.routes"

const routes = [
  clientsRouter,
  usersRouter,
  leadsRouter
];

```

<h2 align="center">Run the project</h2>

In order to run the base you must do the following commands:
- ```tsc -w```
- ```nodemon dist/index.js```


---


<h2 align="center">Current Features</h2>
At the moment, this base supports actions for the following:

- findAll **(GET)**
- findById **(GET)**
- store **(POST)**
- findIdAndUpdate **(PUT & PATCH)**
- findByIdAndDelete **(DELETE)**

---

<h2 align="center">Todo List</h2>

- [ ] Add Sequelize support
- [ ] Divide ModelRoutes file under a controller structure


---


<h2 align="center">Contributing</h2> 

> To get started you must follow the following steps

### Step 1

- **Option 1**
    - 🍴 Fork this repo!

- **Option 2**
    - 👯 Clone this repo to your local machine using `https://github.com/adevr/typescript-webservice.git`

### Step 2

- **HACK AWAY!** 🔨🔨🔨

### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/adevr/typescript-webservice/compare/" target="_blank">`https://github.com/adevr/typescript-webservice/compare/`</a>.

---

<h2 align="center">Support</h2>

> If you find an error, don't hesitate and create an issue!
> Additionally you can contribute to this project by fixing that or other issues that will be placed on the issues tab.

---


<h2 align="center">License</h2>

<a href="https://github.com/adevr/typescript-webservice/blob/master/LICENSE"><img src="http://img.shields.io/:license-mit-blue.svg" alt="License"></a>

- **[MIT license](https://github.com/adevr/typescript-webservice/blob/master/LICENSE)**
- Copyright 2020 © <a href="http://adevr.github.io" target="_blank">Alexandre Reis</a>.


