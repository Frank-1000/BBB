$(function () {
    /* 异步请求网络请求 */
    /* 发送网络请求 */
    // console.log($('.main-sell-list'))
    $.ajax({
        type: "get",
        url: "./server/daily.php",
        dataType: "json",
        success: function (response) {
            // console.log(response);
            
            let data = response.data;
            let html = data.map((ele) => {
                return `
                <li class="daily-sell-item">
                    <a href="http://127.0.0.1/BBB/babai2/html/goods.html" title="奥氮平片(欧兰宁)"
                        target="_blank">
                        <img src="${ele.img}" alt="奥氮平片(欧兰宁)"
                            class="pd-img">
                        <div class="pd-wrapper">
                            <p class="pd-name">${ele.name}</p>
                            <p class="pd-desp">${ele.title}</p>
                            <p class="pd-price">
                                <em>￥${ele.pri}</em>
                                <del>￥${ele.del}</del>
                            </p>
                        </div>
                    </a>
                </li>
                `
            }).join("");
            $(".daily-rec-list").html(html);
            console.log("hahaha")
        },
        error: function () {
            console.log("++");
        }
    });

})
