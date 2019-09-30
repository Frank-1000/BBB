$(function(){

  let urlA = location.href;
  // let cookieImg=null;
    
  function urls() {
      let urlB = urlA.split("?");
      return urlB[1];
  }
  let url = urls();
  $.ajax({
      type: "get",
      url: "../server/goods.php",
      data: `id=${url}`,
      dataType: "json",
      success: function (response) {
  
          let o = response.res[0];
          // console.log(o);
          // console.log("+++");
          if(response.res[0]){
            $(".font18").get(0).innerText = o.name;
            $(".name1").get(0).innerText = o.name;
            $(".name2").get(0).innerText = o.title;
            $(".price_shang").get(0).innerText = o.pri;
            $(".price_shi").get(0).innerText = o.del;
            // cookieImg.get(0)=o.img;

          }
         

      },

  });
  // 增加商品数量
    var a=1;
    $(".icon_add").click(function(){
       a++;
      $("#quantity").val(a);
    })

    $(".icon_rec").click(function(){
        a--;
        if(a<=0){
            a=0;
        }
       $("#quantity").val(a);
     })

    //  弹出登陆框
    $(".add_cart").click(function(){
      var cookieName=$(".font18").get(0).innerText;
      var cookiePir= $(".price_shang").get(0).innerText;
      Cookie.set("cookieName",cookieName,'/',14);
      Cookie.set("cookiePir",cookiePir,'/',14);
      alert("添加购物车成功")
    })
  
    $(".add_cart2").click(function(){
      // alert("添加购物车成功");
      window.location.href = "http://127.0.0.1/BBB/babai2/html/car.html";
    })


   
     
})

