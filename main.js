// main.js
// Capstone 2: Express
"use strict";

const port = 3000,
    express = require('express'),
    layouts = require('express-ejs-layouts'),
    homeController = require('./controllers/homeController'),
    errorController = require('./controllers/errorController'),
    app = express();

// 앱 설정
    app.set("port", process.env.PORT || port);

/**
 * Listing 12.7 (p. 179)
 * ejs 레이아웃 렌더링
 */

    app.set("view engine", "ejs");
    app.use(layouts);

/**
 * Listing 12.4 (p. 177)
 * body-parser의 추가
 */
    app.use(
        express.urlencoded({
            extended: false
        })
    );
    app.use(express.json());

/**
 * Listing 12.6 (p. 178)
 * 각 페이지 및 요청 타입을 위한 라우트 추가
 */
    app.get("/", homeController.getHome);
    app.get("/courses", homeController.getcourses);
    app.get("/contact", homeController.getcontact);
    app.get("/thanks", homeController.getthanks);

/**
 * Listing 12.12 (p. 184)
 * 에러 처리 라우트 
 */
    app.use(errorController.logErrors);
    app.use(errorController.resNotFound); 


// 3000번 포트로 리스닝 설정
app.listen(app.get("port"), () => {
    console.log(
        `Server running at http://localhost:${app.get(
            "port"
        )}`
    );
});