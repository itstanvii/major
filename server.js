const express = require("express");
const https = require("https");
const fs = require("fs");
const history = require("connect-history-api-fallback");
const jsonServer = require("json-server");
const bodyParser = require("body-parser");
const auth = require("./authMiddleware");
const router = jsonServer.router("serverData.json");

const enableHttp = false;

const ssloptions = {};

if (enableHttp) {
  ssloptions.cert = fs.readFileSync("./ssl/major-project.cert");
  ssloptions.key = fs.readFileSync("./ssl/major-project.pem");
}

const app = express();
app.use(bodyParser.json());
app.use(auth);
app.use("/api", router);
app.use(history());
app.use("/", express.static("./dist/major-project/browser"));

app.listen(80, () => console.log("Http server running on port 80"));

if (enableHttp) {
  https
    .createServer(ssloptions, app)
    .listen(443, () => console.log("https server running on port 443"));
} else {
  console.log("Https disabled");
}
