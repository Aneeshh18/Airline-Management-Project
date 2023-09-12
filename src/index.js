const express = require("express");
const bodyParser = require("bodyParser");

const {PORT} = require('./config/serverConfig');

const setupAndStartServer = async () =>{

    // Create express obj
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`)
    });

}

setupAndStartServer();