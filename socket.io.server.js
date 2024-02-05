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

// socket 서버와 web 서버 설정 및 실행
const io = socket.listen(server);

// connection
// disconnection

io.sockets.on("connection", (socket) => {
    console.log("client connect");

    // 클라이언트가 전송한 데이터처리
    socket.on("rint", (data) => {
        console.log("client send data : ", data);
        socket.emit("smart", data);
    });

    socket.on("disconnect", () => {
        console.log("end : ", socket.id);
    });
});
