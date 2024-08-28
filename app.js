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

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


