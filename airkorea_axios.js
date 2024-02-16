const express = require("express");
const axios = require("axios");
const morgan = require("morgan");

const app = express();
app.set("port", process.env.PORT || 8000);

// 공통 미들웨어
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// 라우터 설정
app.get("/airkorea", async (req, res) => {
    const serviceKey =
        "afcT3VhbiojM0LplrhAMAcR5wycVlLG2bWLRHn2iczUfRuOluF0cj7l0sTVWErmGABGT7NLkU1HOW%2BUCxIqVrg%3D%3D";
    const airUrl =
        "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty";

    let params = encodeURI("serviceKey") + "=" + serviceKey;
    params += "&" + encodeURI("numOfRows") + "=" + encodeURI("1");
    params += "&" + encodeURI("pageNo") + "=" + encodeURI("1");
    params += "&" + encodeURI("dataTerm") + "=" + encodeURI("DAILY");
    params += "&" + encodeURI("ver") + "=" + encodeURI("1.3");
    params += "&" + encodeURI("stationName") + "=" + encodeURI("마포구");
    params += "&" + encodeURI("returnType") + "=" + encodeURI("json");

    const url = airUrl + params;

    try {
        let result = await axios.get(url);
        // res.json(result.data);

        let airItem = {
            location: "마포구",
            time: result.data.response.body.item[0]["dataTime"],
            pm10: result.data.response.body.item[0]["pm10Value"],
            pm20: result.data.response.body.item[0]["pm20Value"],
        };

        let badAir = [];

        if (airItem.pm10 < 30) {
            badAir.push("좋음");
        } else if (airItem.pm10 > 30 && airItem.pm10 <= 80) {
            badAir.push("보통");
        } else {
            badAir.push("나쁨");
        }

        if (airItem.pm20 < 15) {
            badAir.push("좋음");
        } else if (airItem.pm20 > 15 && airItem.pm20 <= 35) {
            badAir.push("보통");
        } else {
            badAir.push("나쁨");
        }

        res.send(
            `관측 지역: ${airItem.location} / 관측 시간: ${airItem.time} / 미세먼지: ${badAir[0]} / 초미세먼지: ${badAir[1]}`
        );
    } catch (error) {
        console.log(error);
    }
});

app.listen(app.get("port"), () => {
    console.log("Server Running at http://127.0.0.1:8000");
});
