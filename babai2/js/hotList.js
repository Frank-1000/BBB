$(function () {
    /* 异步请求网络请求 */
    /* 发送网络请求 */
    // console.log($('.main-sell-list'))
    $.ajax({
        type: "get",
        url: "./server/hotList.php",
        dataType: "json",
        success: function (response) {
            // console.log(response);
                
            let data = response.data;
            let html = data.map((ele) => {
                return `
                <li class="main-sell-item" id=${ele.id}>
                <a href="./html/goods.html?${ele.id}" title="复方阿胶浆 48支"
                    target="_blank">
                    <img src=${ele.img} alt=""
                        class="pd-img">
                    <div class="pd-wrapper">
                        <p class="pd-name">${ele.name}</p>
                        <p class="pd-desp">${ele.title}</p>
                        <p class="pd-price">
                            <em>￥${ele.pri}</em>
                            <del>${ele.del}</del>
                        </p>
                    </div>
                </a>
            </li>
                `
            }).join("");
            $(".main-sell-list").html(html);
            // console.log("hahaha")
        },
        error: function () {
            console.log("++");
        }
    });

})
