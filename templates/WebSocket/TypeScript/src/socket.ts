import { app } from "./app";
import { Server as SocketServer } from "socket.io";
import http from "http";

const server = http.createServer(app);

const io = new SocketServer(server, {
  cors: {
    origin: ["http://localhost"],
  },
});

io.on("connection", (socket) => {
  console.log("Client connected: " + socket.id);
});

export { server };
