const app = require("./src/expressServer");
const httpServer = require("http").createServer(app);
const { Server } = require("socket.io");

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["Practice-is-the-best-Learning."],
        credentials: true
    }
});

io.on("connection", (socket) => {
});

httpServer.listen(2057);