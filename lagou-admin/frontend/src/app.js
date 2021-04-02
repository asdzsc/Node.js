import indexTpl from "./views/home.art";

const html = indexTpl({});
console.log(html);
$("#root").html(html);