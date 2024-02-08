const fs = require("fs");
const socket = require("socket.io");
const http = require("http");
const express = require("express");

let seats = [
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];

// 웹서버 생성
const app = express();
const server = http.createServer(app);

// 라우터 구성
app.get("/", (req, res) => {
    fs.readFile("reservePage.html", (err, data) => {
        // res.send(data.toString());
        res.end(data);
    });
});
app.get("/seats", (req, res) => {
    res.send(seats);
});

// 웹서버 실행
server.listen(8000, () => {
    console.log("Server Running at http://127.0.0.1:8000");
});

// 소켓서버 생성 및 실행
const io = socket.listen(server);
io.sockets.on("connection", (socket) => {
    socket.on("reserve", (data) => {
        seats[data.y][data.x] = 2;
        io.sockets.emit("reserve", data);
    });
});
