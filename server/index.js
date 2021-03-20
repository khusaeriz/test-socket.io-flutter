const SocketIO = require("socket.io");
const express = require("express");
const { createServer } = require("http");

const app = express();
const server = createServer(app);

const io = SocketIO(server);

io.on("connection", (client) => {
  console.log(client);
});

io.on("test", (data) => {
  console.log(data);
});

app.get("/", (req, res) => {
  io.emit("test", req.query.message);

  res.send("sended");
});

server.listen(3009, () => {
  console.log("starting server");
});
