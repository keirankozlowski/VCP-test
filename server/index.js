const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const cors = require("cors");
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

// const uri = "mongodb+srv://keiran:<Macduffer#1>@vcp-test-server-6xbdc.mongodb.net/test?retryWrites=true";
const uri = "mongodb://kkoz:a123456@ds151402.mlab.com:51402/vcp-test";

const server = express();
mongoose
  .connect(
    uri,
    { useNewUrlParser: true, useCreateIndex: true }
  )
  .then(() => {
    const port = process.env.PORT || 6666;
    server.listen(port, () => console.log(`API running on port ${port}`));
  })
  .catch(err => {
    console.log(err);
  });

server.use(morgan("dev"));
server.use(bodyParser.json());
server.use(cors(corsOptions));

server.use("/users", require("./constants/routes"));

server.get("/", (request, response) => {
  response.send("Server initialized.");
});
