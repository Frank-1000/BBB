

$(function(){
    let valUsername = Cookie.get("phone");
    let valPassword = Cookie.get("password");
    // let vallogin = Cookie.get("login1");
    if (valUsername&&valPassword) {
       $(".welcome-login").text(valUsername);
       $(".login_text").text("已登录");
       $(".welcome-register").text("退出登录");
       $(".welcome-register").click(function(){
        Cookie.clear();
        window.location.href = "http://127.0.0.1/BBB/babai2/html/login.html";
        
       })
    }

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

// 轮播图模块开始  --star--
var index=0;
var timer=null;
    // 添加"nxt"点击事件
       $(".flexNext").click(function(){
           index++;
           if(index==8){
               index=0;
           }
        //    $(".slides>a").eq(index).slideDown().siblings().slideUp();
           $(".slides>a").eq(index).css("display","block").siblings().css("display","none");
           $("#jdAdBtn").css("display","block");
           $("#jdAdBtn>a").eq(index).addClass("flex-active").siblings().removeClass("flex-active");
       })
        // 添加"Prev"点击事件
       $(".flexPrev").click(function(){
        index--;
        if(index==-1){
            index=7;
        }
        // $(".slides>a").eq(index).slideDown().siblings().slideUp();
        $(".slides>a").eq(index).css("display","block").siblings().css("display","none");
        $("#jdAdBtn").css("display","block");
        $("#jdAdBtn>a").eq(index).addClass("flex-active").siblings().removeClass("flex-active");
    })
    //    用定时器设置自动切换
   timer= setInterval(function(){
        index++;
        if(index==8){
            index=0;
        }
        // $(".slides>a").eq(index).slideDown().siblings().slideUp();
        $(".slides>a").eq(index).css("display","block").siblings().css("display","none");
        $("#jdAdBtn").css("display","block");
        $("#jdAdBtn>a").eq(index).addClass("flex-active").siblings().removeClass("flex-active");
    },2000);
    //    鼠标移出打开定时器
    $(".baner-scoller").mouseleave(function(){
        timer= setInterval(function(){
            index++;
            if(index==8){
                index=0;
            }
            // $(".slides>a").eq(index).slideDown().siblings().slideUp();
            $(".slides>a").eq(index).css("display","block").siblings().css("display","none");
            $("#jdAdBtn").css("display","block");
            $("#jdAdBtn>a").eq(index).addClass("flex-active").siblings().removeClass("flex-active");
        },2000);
    })
    // 鼠标移入删除定时器
    $(".baner-scoller").mouseenter(function(){
        clearInterval(timer)
    })
        // 大小图片索引相连
    $("#jdAdBtn>a").mouseenter(function(){
         index=$(this).index();
         $(".slides>a").eq(index).css("display","block").siblings().css("display","none");
         $("#jdAdBtn").css("display","block");
            $("#jdAdBtn>a").eq(index).addClass("flex-active").siblings().removeClass("flex-active")
    })

    // 轮播图结束  --end--

    // 返回顶部效果
    $("#sidebar-extra").click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });

    $(".main-nav-a").eq(0).click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        $('body,html').animate({scrollTop:700},500);
    })
    $(".main-nav-a").eq(1).click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        $('body,html').animate({scrollTop:1050},500);
    })
    $(".main-nav-a").eq(2).click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        $('body,html').animate({scrollTop:1400},500);
    })
    $(".main-nav-a").eq(3).click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        $('body,html').animate({scrollTop:2190},500);
    })
    $(".main-nav-a").eq(4).click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        $('body,html').animate({scrollTop:2500},500);
    })
    $(".main-nav-a").eq(5).click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        $('body,html').animate({scrollTop:2900},500);
    })
    $(".main-nav-a").eq(6).click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        $('body,html').animate({scrollTop:3500},500);
    })
    $(".main-nav-a").eq(7).click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        $('body,html').animate({scrollTop:4100},500);
    })
    $(".main-nav-a").eq(8).click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        $('body,html').animate({scrollTop:4700},500);
    })


    // $(window).scroll(function(){
    //     var top=$(document).scrollTop();
    //     console.log(top)
    //     if(top>=700){
    //         $(".main-nav-a").eq(0).addClass("cur").siblings().removeClass("cur");
    //     }else if(top>=1050){
    //         $(".main-nav-a").eq(1).addClass("cur").siblings().removeClass("cur");
    //     }else if(top>=1400){
    //         $(".main-nav-a").eq(2).addClass("cur").siblings().removeClass("cur");
    //     }else if(top>=2190){
    //         $(".main-nav-a").eq(3).addClass("cur").siblings().removeClass("cur");
    //     }else if(top>=2500){
    //         $(".main-nav-a").eq(4).addClass("cur").siblings().removeClass("cur");
    //     }else if(top>=2900){
    //         $(".main-nav-a").eq(5).addClass("cur").siblings().removeClass("cur");
    //     }else if(top>=3500){
    //         $(".main-nav-a").eq(6).addClass("cur").siblings().removeClass("cur");
    //     }else if(top>=4100){
    //         $(".main-nav-a").eq(8).addClass("cur").siblings().removeClass("cur");
    //     }

        

    // })

})