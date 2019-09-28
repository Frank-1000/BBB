$(function(){
    $.ajax({
        type: "get",
        url: "./server/floor.json",
        dataType: "json",
        success: function (response) {
            let data = response;
            // console.log(data);
            let html = data.map((ele,index)=>{
                let topHTML=ele.top.map((ele,index)=>{
                    return`
                    <a target="_blank" href="http://www.800pharm.com/shop/product-100795-1400519.html">${ele.a}</a>
                    `;
                }).join("");
                let dlHTML=ele.dl.map((ele,index)=>{
                    return`
                    <a target="_blank" href="http://www.800pharm.com/shop/product-100068-602468.html">${ele.a}</a>
                    `;
                }).join("");
                let listHTML=ele.list.map((ele)=>{
                    return`
                    <li class="floor-extra-item">
                    <a href="http://www.800pharm.com/shop/product-100091-403325.html" title="【蔓迪】 米诺地尔酊"
                        target="_blank">
                        <img src=${ele.img}
                            alt="【蔓迪】 米诺地尔酊" class="pd-img">
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
                    `;
                }).join("");

                return`
                <div class="main-floor-box nav-item-box">
                <div class="floor-header">
                    <h2><i class="i-icon floor-${index+1}"></i>${ele.h2}</h2>
                    <div class="floor-rec-list">
                     ${topHTML}
                    </div>
                </div>
             
                <div class="floor-body">
                    <div class="floor-main">
                        <div class="floor-main-content">
                            <a href="http://www.800pharm.com/shop/product-100815-1392709.html?gg_code=index_yao_main"
                                title="" target="_blank" style="background-color:#null"><img
                                    src=${ele.src} alt="" border="0"
                                    width="310" height="520"></a>
                        </div>
                    </div>
                    <div class="floor-side">
                        <div class="floor-side-img">
                            <a href="http://www.800pharm.com/shop/product-100986-1704772.html?gg_code=index_yao_1" title=""
                                target="_blank" style="background-color:#null"><img
                                    src=${ele.src2} alt="" border="0"
                                    width="190" height="360"></a>
                        </div>
                        <div class="floor-side-rec">
                            ${dlHTML}
                        </div>
                    </div>
            
                    <div class="floor-extra">
                        <ul class="floor-extra-list">
                        ${listHTML}
                        </ul>
                    </div>
                </div>
            </div>

                `;
            }).join("");
            $(".kkk").html(html);
        },
        error: function() {
            console.log("++");
        }
    });

   
})
