import router from "../../routes";

// 职位列表模板
import positionTpl from "../../views/position.tpl";
import positionAddTpl from "../../views/position-add.tpl";
import positionListTpl from "../../views/position-list.tpl";

// 分页组件
import handlePage from "../../components/pagination";

import { positionsAdd } from "../../models/position-add";

import { auth } from "../../models/auth";

export default (router) => {
    return async(req, res, next) => {
        let result = await auth();

        if (result.res == 200) {
            // 渲染职位页面
            $("#content").html(positionTpl);

            // 渲染职位list
            let htmlList = template.render(positionListTpl, {
                data: ["a", "b", "c"],
            });
            $("#positions-list").html(htmlList);

            // 分页
            handlePage(["a", "b", "c"]);

            // 职位
            //显示添加模态框
            $("#positions-list-box").after(positionAddTpl);
            // 点击保存关闭
            $("#positions-save").on("click", function() {
                // 关闭模态框
                $("#positions-close").click();
                const formBody = $("#positions-form").serialize();
                // let result = await positionsAdd();
            });
        } else {
            router.go("/signin");
        }
        // next();
    };
};