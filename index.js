const app = require("./src/expressServer");
const httpServer = require("http").createServer(app);
const { Server } = require("socket.io");

const io = new Server(httpServer);

io.on("connection", (socket) => {
});

httpServer.listen(3000);