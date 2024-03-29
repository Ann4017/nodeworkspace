const axios = require("axios");
const cheerio = require("cheerio");

const getHtml = async () => {
    try {
        return await axios.get(
            "https://roadbook.co.kr/category/%EC%8B%A0%EA%B0%84%EC%86%8C%EA%B0%9C"
        );
    } catch (error) {
        console.log(error);
    }
};

getHtml()
    .then((html) => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("div#searchList ol").children("li");
        $bodyList.each((i, elem) => {
            ulList[i] = {
                bookList: $(elem).find("a").text(),
                url: $(elem).find("a").attr("href"),
            };
        });

        const data = ulList.filter((n) => n.bookList);
        return data;
    })
    .then((res) => console.log(res));
