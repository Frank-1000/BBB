$(function(){
    /* 001-当页面加载完的时候，要发请求获取数据 */
    console.log("___");
            let currentType = 0;
            new Promise(function(resolve, reject) {
                $.ajax({
                    type: "get",
                    url: "../server/getPageCount.php",
                    dataType: "json",
                    success: function(response) {
                        console.log(response);
                        let pageCount = response.data;
                        for (let i = 0; i < pageCount; i++) {
                            let oPage = $(`<a href="javascript:;">${i+1}</a>`);
                            $(".pages").append(oPage);
                        }
                        $(".pages").children("a").first().addClass("active");
                        resolve();
                    }
                });
                // console.log("111111111");
                
            }).then(function() {
                getDatWithPage(currentType, 0);
            })

             /* 002-当拿到数据后根据数据来渲染页面 */
             $(".pages").on("click", "a", function(e) {
                e.preventDefault();
                $(this).addClass("active").siblings().removeClass("active");
                /* 先获取当前是第几页 */
                let index = $(this).index();
                // console.log(index);
                getDatWithPage(currentType, index);
            })

            let getDatWithPage = (type, page) => {
                $.ajax({
                    type: "get",
                    url: "../server/getProductData.php",
                    data: `type=${type}&page=${page}`,
                    dataType: "json",
                    success: function(response) {
                        let data = response.data;
                        console.log(data);

                        let html = data.map((ele) => {
                            // console.log(item);
                            return `
                        <div class="mod">
                            <dl class="b_prod">
                            <dt class="pic">
                                <a href="http://127.0.0.1/BBB/babai2/html/goods.html" title="伊泰青"
                                    target="_blank"><img
                                        src=${ele.img} alt="伊泰青"
                                        style="width: 100px; height: 100px; padding-top: 0px;"></a>
                                <span class="tag"></span>
                            </dt>
                            <dd class="b_info">
                                <p class="tit">
                                    <a href="http://127.0.0.1/BBB/babai2/html/goods.html" title="伊泰青"
                                        target="_blank">
                                        <i class="rx"></i>
                                        ${ele.name}
                                    </a>
                                </p>
                                <p class="gnzz" vlimit="88" title="高血压病。">${ele.title}</p>
                                <p class="c_name">${ele.title2}</p>
                            </dd>
                        </dl>
                        <span class="pdPrice">
                        <b>￥</b>${ele.price}</span>
                    <a target="_blank" class="goNextBtn"
                        href="http://127.0.0.1/BBB/babai2/html/goods.html">${ele.a};</a>
                        </div>
                  `
                        }).join("");
                        $(".b_result").html(html);
                    },
                    error: function() {
                        console.log("++");
                    }
                });
            }

            $(".listShow").click(function() {
                let index = $(this).index();
                currentType = index;
                getDatWithPage(currentType, 0);
                $(this).addClass("red").siblings().removeClass("red");
            })



})

// $(function () {
//     $.ajax({
//         type: "get",
//         url: "../server/data.json",
//         // data: `type=${type}&page=${page}`,
//         dataType: "json",
//         success: function(response) {
//             let data = response;
//             console.log(data);

//             let html = data.map((ele) => {
//                 // console.log(item);
//                 return `
//             <div class="mod">
//                 <dl class="b_prod">
//                 <dt class="pic">
//                     <a href="http://www.800pharm.com/shop/product-100910-1505763.html" title="伊泰青"
//                         target="_blank"><img
//                             src="${ele.img}" alt="伊泰青"
//                             style="width: 100px; height: 100px; padding-top: 0px;"></a>
//                     <span class="tag"></span>
//                 </dt>
//                 <dd class="b_info">
//                     <p class="tit">
//                         <a href="http://www.800pharm.com/shop/product-100910-1505763.html" title="伊泰青"
//                             target="_blank">
//                             <i class="rx"></i>
//                             ${ele.name}
//                         </a>
//                     </p>
//                     <p class="gnzz" vlimit="88" title="高血压病。">  ${ele.title}</p>
//                     <p class="c_name">${ele.title2}</p>
//                 </dd>
//             </dl>
//             <span class="pdPrice">
//             <b>￥</b>${ele.pri}</span>
//         <a target="_blank" class="goNextBtn"
//             href="http://www.800pharm.com/shop/product-100910-1505763.html">${ele.a};</a>
//             </div>
//       `
//             }).join("");
//             console.log(html)
//             $(".b_result").html(html);
//         },
//         error: function() {
//             console.log("++");
//         }
//     });
//   })