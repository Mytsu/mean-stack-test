import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from "cors"
import * as mongoose from "mongoose"

import { mainRoutes } from "./routes/MainRoutes";

class App {
    public app: express.Application
    public connection: mongoose.Connection

    constructor() {
        this.app = express()
        this.config()
        this.connectDb()    
    }

    private config(): void {
        this.app.use(cors)
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: false}))
        this.app.use("/", mainRoutes)
    }    

    private connectDb(): void {
        mongoose.connect('') // TODO: setup MongoDB
        this.connection = mongoose.connection
        this.connection.once('open', () => {
            console.log("MongoDB connected successfully")
        })
    }
}

export default new App().app