import pageHeaderTpl from "../views/index-pageheader.tpl";
const pageHeader = () => {
    const hash = location.hash;
    const nav = {
        "#/index/users": {
            mainNav: "用户管理",
            subNav: "用户列表",
            sub: "用户",
        },
        "#/index/positions": {
            mainNav: "职位管理",
            subNav: "职位列表",
            sub: "职位",
        },
    };
    let html = template.render(pageHeaderTpl, {
        mainNav: nav[hash].mainNav,
        subNav: nav[hash].subNav,
        sub: nav[hash].sub,
    });

    $("#content").before(html);
};

export default pageHeader;