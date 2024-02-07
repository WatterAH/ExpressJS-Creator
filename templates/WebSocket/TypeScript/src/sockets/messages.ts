import { Server, Socket } from "socket.io";

interface Body {
  name: string;
  message: string;
  room: string;
}

export const message = (io: Server, socket: Socket) => {
  socket.on("message", (body: Body) => {
    return io.emit("message", body);
  });
};

export const privateMessage = (io: Server, socket: Socket) => {
  socket.on("privateMessage", (body: Body) => {
    return io.to(body.room).emit("privateMessage", body);
  });
};
