$(function () {
    /* 异步请求网络请求 */
    /* 发送网络请求 */
    // console.log($('.sort-item'))
   $.ajax({
       type: "get",
       url: "./server/data1.json",
       dataType: "json",
       success: function (response) {
           data=response;
           console.log(response);
           console.log("----");
           console.log(data[0].details);
           
           let detailss= data[0].details;
           detailss.map(function(ele){
            htmls=""
items=ele.items;
for(let i=0;i<items.length;i++){
    htmls+=`<li>${items[i]}</li>`
}
// console.log(htmls);

           })
        //    for(var i=0;i<$(".sort-item-box").length;i++){
               
        //    }
           
       }
   });
})
