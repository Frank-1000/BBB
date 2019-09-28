$(function(){
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
    $(".buy").click(function(){
      $(".pop").css("display","flex");
    })
    // 关闭登陆框
    $(".close").click(function(){
      $(".pop").css("display","none");
    })
})

