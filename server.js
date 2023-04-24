const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(socket);
  console.log("socket is connected");
  socket.on("chat", (payload) => {
    console.log(payload);
    io.emit("chat", payload);
  });
});

server.listen(8080, () => {
  console.log("running on 8080");
});
