console.log("index");
$.ajax({
    url: "/api/list",
    success: function(result) {
        console.log(result);
        // let html = "";
        // $.each(result.data, (i, v) => {
        //     html += `<p>${v}</p>`;
        // });
        let templateStr = `
        {{each data}}
            <p>{{$value}}</p>
        {{/each}}
    `;
        let html = template.render(templateStr, {
            data: result.data,
        });
        $(".box").html(html);
    },
});