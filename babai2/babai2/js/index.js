$(function(){
//  小白
$(".ei-notice").mouseover(function(){
    $(this).addClass("cur").siblings().removeClass("cur");
    $(".ei-box1").css("display","block");
    $(".ei-box2").css("display","none");
})
$(".ei-tip").mouseover(function(){
    $(this).addClass("cur").siblings().removeClass("cur");
    $(".ei-box2").css("display","block");
    $(".ei-box1").css("display","none");
})

// 友情链接
$(".hd").children().mouseover(function(){
    $(this).addClass("cur").siblings().removeClass("cur");
 index= $(this).index();
 $(".ft").eq(index).css("display","block").siblings().css("display","none");
 $(".hd").css("display","block");
})
// 数据渲染


})