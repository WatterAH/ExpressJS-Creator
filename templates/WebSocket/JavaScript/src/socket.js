import { app } from "./app.js";
import { Server as SocketServer } from "socket.io";
import http from "http";
import { message, privateMessage } from "./sockets/messages.js";

const server = http.createServer(app);

const io = new SocketServer(server, {
  cors: {
    origin: ["http://localhost"],
  },
});

io.on("connection", (socket) => {
  console.log("Client connected: " + socket.id);
  message(io, socket);
  privateMessage(io, socket);
});

export { server };
