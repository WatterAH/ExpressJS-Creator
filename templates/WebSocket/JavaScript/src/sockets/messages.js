export const message = (io, socket) => {
  socket.on("message", (body) => {
    return io.emit("message", body);
  });
};

export const privateMessage = (io, socket) => {
  socket.on("privateMessage", (body) => {
    return io.to(body.room).emit("privateMessage", body);
  });
};
