<p align="center">
<img src="https://raw.githubusercontent.com/adevr/typescript-webservice/master/logo.png" width="534" alt="Typescript Webservice"/>
</p>
<p align="center">
   A base for the development of webservice with Typescript, Restify and Mongoose
</p>

<p align="center">
<img src="http://g.recordit.co/sXAeT4BY4I.gif" alt="Example Request"/>
</p>

<p align="center">
 <a href="https://app.codacy.com/manual/adevr/typescript-webservice?utm_source=github.com&utm_medium=referral&utm_content=adevr/typescript-webservice&utm_campaign=Badge_Grade_Dashboard"><img src="https://api.codacy.com/project/badge/Grade/61f70b41f8ff4eb388d3be9c4ae0c86d" alt="License"></a> 
 <a href="https://github.com/adevr/typescript-webservice/blob/master/LICENSE"><img src="http://img.shields.io/:license-mit-blue.svg" alt="License"></a>
</p>

---

## Installation
In order to install this base you must have this requirements on your machine:
> npm ^= 6.13.4

> node ^= 12.14.0


<p>
To install this typescript base you must run the following command under your bash:
</p>

`npm install`

---

## Clone

- Clone this repo to your local machine using `https://github.com/adevr/typescript-webservice.git`

---

## Examples

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

## Run the base
In order to run the base you must do the following commands:
- ```tsc -w```
- ```nodemon dist/index.js```