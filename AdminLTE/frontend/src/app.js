import $ from "jquery";
// 载入css
import "./assets/common.css";
// 载入路由
import router from "./routes/index";

const hash = location.hash.slice(1);

router.go(hash);

// // 第一次打开的页面
// $.ajax({
//     url: "/api/users/isAuth",
//     dataType: "json",
//     success(res) {
//         if (res.res == 200) {
//             router.go("/index");
//         } else {
//             router.go("/signin");
//         }
//     },
// });