import express from "express";
import cors from "cors" ;
import cookieParser from "cookie-parser"

const app = express();

app.use(cors());

app.use(cookieparser()); 
app.use(static("public"))

Promise.resolve(requestHandler(req, res, next))
    .catch((err) => next(err));
    
export {app}