const http = require("http");
const fs = require("fs");
const socket = require("socket.io");

const server = http
    .createServer((req, res) => {
        fs.readFile("socketPage.html", (err, data) => {
            res.writeHead(200, { "content-type": "text/html" });
            res.end(data);
        });
    })
    .listen(8000, () => {
        console.log("Server running at http://127.0.0.1:8000");
    });

const io = socket.listen(server);
let id = 0;

io.sockets.on("connection", (socket) => {
    id = socket.id;

    socket.on("rint", (data) => {
        // public 통신
        // io.sockets.emit("smart", data);

        // broadcast 통신
        // socket.broadcast.emit("smart", data);

        // private 통신
        io.sockets.to(id).emit("smart", data);
    });
});
