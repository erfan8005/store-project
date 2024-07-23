const express = require("express");
const { default: mongoose } = require("mongoose");
const morgan = require("morgan");
const path = require('path');
const createError = require("http-errors")
module.exports = class App {
    #app;
    #DB_URL;
    #PORT;
    constructor(PORT, DB_URL, AllRoutes) {
        this.#app = express();
        this.#DB_URL = DB_URL;
        this.#PORT = PORT;
        this.createServer();
        this.createRoutes(AllRoutes);
        this.configApplication();
        this.connectToDb();
        this.errorHandling();
    }
    configApplication() {
        this.#app.use(express.json());
        this.#app.use(express.urlencoded({extends : true}));
        this.#app.use(express.static(path.join(process.cwd(), "public")));
        this.#app.use(morgan('dev')
        )
    }
    connectToDb() {
        mongoose.connect(this.#DB_URL).then(() => {
            console.log("mongodb is connected");
        }).catch(err => {
            console.log(err.message);
        })

        mongoose.connection.on("connected", () => {
            console.log("mongoose connected to db");
        })

        process.on("SIGINT", async () => {
            mongoose.connection.close();
            process.exit(0);
        })
    }
    createServer() {
        this.#app.listen(this.#PORT, () => {
            console.log(`http://localhost:${this.#PORT}`);
        })
    }
    createRoutes(AllRoutes) {
        this.#app.use(AllRoutes);
    }
    errorHandling() {
        this.#app.use((req, res, next) => {
            next(createError.NotFound(".آدرس یافت نشد"));
        })

        this.#app.use((err, req, res, next) => {
            console.log(err);
            const serverError = createError.InternalServerError();
            return res.status(err?.statusCode ?? serverError.status).json({
                data: null,
                errors: {
                    statusCode: err?.statusCode ?? err?.status ?? serverError.status,
                    message: err?.message || serverError.message
                }

            })
        })
    }
}