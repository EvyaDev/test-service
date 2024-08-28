const express = require("express")
const cors = require("cors");
const app = express();

const http = require("http");

const server = http.createServer(app);

app.use(express.json());

app.use(cors({
    origin: true,
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Authorization,content-type,accept',
}));

server.listen(4000, () => {
    console.log("the server is run...")
})