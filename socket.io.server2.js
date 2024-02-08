const fs = require("fs");
const http = require("http");
const socketIO = require("socket.io");

const server = http.createServer((req, res) => {
    fs.readFile("socketPage2.html", (err, data) => {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
    });
});

const io = socketIO(server);

io.on("connection", (socket) => {
    console.log("접속");

    let roomName = null;

    socket.on("join", (data) => {
        console.log(data);
        roomName = data;
        socket.join(roomName);
    });

    socket.on("message", (data) => {
        console.log("roomName: ", data.roomName);
        console.log("msg: ", data.msg);
        io.sockets.to(data.roomName).emit("message", data.msg);
        //io.to(roomName).emit("message", data);
    });
});

server.listen(8000, () => {
    console.log("Server running at http://127.0.0.1:8000");
});
