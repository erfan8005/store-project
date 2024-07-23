const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extends : true}));
const App = require('./app/http/controller/server');
const { AllRouters } = require('./app/router/router');
new App(3000, "mongodb://127.0.0.1:27017/store_Project", AllRouters);