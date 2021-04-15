import $ from "jquery";

// 分页模板
import usersPagesTpl from "../views/users-pages.tpl";

import page from "../databus//page";

const pageSize = page.pageSize;

// 设置当前页选中状态
const setPageActive = (index) => {
    $("#users-page #users-page-list li:not(:first-child,:last-child)")
        .eq(index - 1)
        .addClass("active")
        .siblings()
        .removeClass("active");
};

// 绑定事件
const bindEvent = (data) => {
    // 切换页面
    $("#users-page")
        .off("click")
        .on(
            "click",
            "#users-page-list li:not(:first-child,:last-child)",
            function() {
                const index = $(this).index();
                // getUserList(index);
                // currentPage = index;

                // 更新bus总线上的共享数据
                page.setCurrentPage(index);

                // 在按钮点击的时候，通过观察者模式，通知list要更新
                $("body").triggerHandler("changeCurrentPage", index);
                setPageActive(index);
            }
        );

    // $("#users-page").on("click");
    // 上一页
    $("#users-page").on("click", "#users-page-list li:first-child", function() {
        if (page.currentPage > 1) {
            page.setCurrentPage(page.currentPage - 1);
            // getUserList(currentPage);
            $("body").trigger("changeCurrentPage", page.currentPage);
            setPageActive(page.currentPage);
        }
    });
    // 下一页
    $("#users-page").on("click", "#users-page-list li:last-child", function() {
        if (page.currentPage < Math.ceil(data.length / pageSize)) {
            // currentPage++;
            page.setCurrentPage(page.currentPage + 1);
            $("body").trigger("changeCurrentPage", page.currentPage);
            // getUserList(currentPage);
            setPageActive(page.currentPage);
        }
    });
};

// 显示分页效果
const handlePage = (data, currentPage) => {
    const total = data.length;
    const pageCont = Math.ceil(total / pageSize);
    // 转换成数组
    let pageArr = new Array(pageCont);
    let html = template.render(usersPagesTpl, {
        pageArr,
    });
    $("#users-page").html(html);
    // 设置当前页选中状态
    setPageActive(currentPage);
    // 触发事件
    bindEvent(data);
    // 默认第一页active
    // $("#users-page-list li:nth-child(2)").addClass("active");
    //not 排除
    // $("#users-page-list li:not(:first-child,:last-child)").on(
    //     "click",
    //     function() {
    //         $(this).addClass("active").siblings().removeClass("active");
    //         getUserList($(this).index());
    //     }
    // );
};

export default handlePage;