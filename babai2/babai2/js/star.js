$(function(){
    $.ajax({
        type: "get",
        url: "./server/star.json",
        dataType: "json",
        success: function (response) {
            let data = response;
            // console.log(data);
            let html = data.map((ele)=>{
                let ulHTML=ele.ul.map((ele)=>{
                    return`
                    <li class="pd-item">
                    <a href="http://127.0.0.1/BBB/babai2/html/goods.html" title="龟龄集"
                        target="_blank">
                        <img src=${ele.img}
                            class="pd-img">
                        <div class="pd-wrapper">
                            <p class="pd-name">${ele.name}</p>
                            <p class="pd-price">
                                <em>￥${ele.pri}</em>
                                <del>￥${ele.del}</del>
                            </p>
                        </div>
                    </a>
                </li>
                    `;
                }).join("");
                return`
                <li class="brand-rec-item">
                <a href="http://127.0.0.1/BBB/babai2/html/goods.html" class="pd-header bg-c43d7e">
                    <img src=${ele.src} class="header-img">
                    <div class="header-info">
                        <p class="header-name">${ele.title}<i class="i-icon icon-gold"></i></p>

                        <p class="header-star">综合评分:<span class="i-icon h-star" style="width:52px;"></span></p>
                    </div>
                </a>
                <ul class="pd-container">
                ${ulHTML}
                </ul>
                <div class="pd-bottom">
                    <p class="pd-tip">${ele.p}</p>
                    <a href="#" class="pd-btn-merchant">进店领券</a>
                </div>
            </li>

                `;
            }).join("");
            $(".brand-rec-list").html(html);
        },
        error: function() {
            console.log("++");
        }
    });

   
})
