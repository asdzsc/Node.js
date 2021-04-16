import router from "../../routes";

// 职位列表模板
import positionTpl from "../../views/position.tpl";
import positionAddTpl from "../../views/position-add.tpl";
import positionListTpl from "../../views/position-list.tpl";

// 分页组件
import handlePage from "../../components/pagination";

import { positonsList } from "../../models/positions-list";

import { auth } from "../../models/auth";

export default (router) => {
    return async(req, res, next) => {
        let result = await auth();

        if (result.res == 200) {
            // 渲染职位页面
            $("#content").html(positionTpl);
            let list = await positonsList();
            console.log(list);
            // 渲染职位list
            let htmlList = template.render(positionListTpl, {
                data: list,
            });
            $("#positions-list").html(htmlList);

            // 分页
            handlePage(list, 1);

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