console.log("index");
// console.log(dataObj);
$.ajax({
    url: "/api/list",
    success: function(result) {
        // console.log(result);
        // let html = "";
        // html += "<ul>";
        // $.each(result.data, (i, v) => {
        //     console.log(v);
        //     html += "<li> " + v + "</li>";
        // });
        // html += "</ul>";
        let templateStr = `
            <ul>
            {{each data}}
                <li>{{$value}}</li>
            {{/each}}
            </ul>
        `;
        let html = template.render(templateStr, {
            data: result.data,
        });
        $(".list").html(html);
    },
});