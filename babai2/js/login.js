$(function() {
    let phoneInput=$(".phone");
    let phoneReg = /^1[3-9]\d{9}$/;
    let passwordReg = /^[a-zA-Z0-9]{6,16}$/;
    let passwordInput=$(".pws");
    let check=$(".click");
    let aaa=$(".erroy");
    let bbb=$(".ppp");
    var a=0,b=0;

    $(".btn-hd-email").click(function() {
        $(this).addClass("current").siblings().removeClass("current");
        $(".phone-box").css("display","none");
       $(".form-inline-email").css("display","block");
    })
    $(".btn-hd-tel").click(function() {
        $(this).addClass("current").siblings().removeClass("current");
        $(".phone-box").css("display","block");
       $(".form-inline-email").css("display","none");
    })
   

   
    // 手机验证
    phoneInput.blur(function() {
        /* 先获取输入框的值，检查和清理(空格|空) */
        var val = $(this).val().trim();
        if (val.length == 0) {
            bbb.text("手机号码不能为空!");
            aaa.slideDown(1);
            a=0;
            d=a+b;
                console.log("a="+a+",b="+b+"d="+d);
        } else {
            if (!phoneReg.test(val)) {
                bbb.text("手机号码不符合规范!");
                aaa.slideDown(1);
                a=0;
                d=a+b;
                console.log("a="+a+",b="+b+"d="+d);
            } else {
                $(this).parents(".form-item").removeClass("form-group-error");
                a=1;
                d=a+b;
                // console.log("a="+a+",b="+b+"d="+d);
            }
        }
    })

    // 密码验证
    passwordInput.blur(function() {
        /* 先获取输入框的值，检查和清理(空格|空) */
        var val = $(this).val().trim();
        if (val.length == 0) {
            bbb.text("密码不能为空!");
            aaa.slideDown(1);
            b=0;
            d=a+b;
            console.log("a="+a+",b="+b+"d="+d);
        } else {
            if (!passwordReg.test(val)) {
                bbb.text("密码不符合规范!");
                aaa.slideDown(1);
                b=0;
                d=a+b;
                console.log("a="+a+",b="+b+"d="+d);
            } else {
                b=1;
                d=a+b;
                console.log("a="+a+",b="+b+"d="+d);
            }
        }
    })

    phoneInput.click(function(){
        aaa.slideUp(1);
        phoneInput.css("border","1px solid blue");
    })
    phoneInput.blur(function(){
        phoneInput.css("border","none");
    })
    passwordInput.click(function(){
        aaa.slideUp(1);
        passwordInput.css("border","1px solid blue");
    })
    passwordInput.blur(function(){
        passwordInput.css("border","none");
    })
// 发送网络请求

    $(".login-btn-submit").click(function() {
        if(d!=2){
            alert("请完善信息");
            return;
        }else{
            $.ajax({
                type: "post",
                url: "../server/api/login.php",
                data: `phone=${phoneInput.val()}&password=${passwordInput.val()}`,
                dataType: "json",
                success: function(response) {
                    if (response.status == "success") {
                        let isChecked = check.is(":checked");
                           if(isChecked){
                                 Cookie.set("phone", phoneInput.val(),'/',14);
                                 Cookie.set("password", passwordInput.val(),'/',14);
                                 Cookie.set("login1",111,'/',14);
                                 alert(response.data.msg);
                                window.location.href = "http://127.0.0.1/BBB/babai2/home.html";
                         }else{
                            Cookie.set("phone", phoneInput.val(),'/',14);
                            Cookie.set("password", passwordInput.val(),'/',14);
                            alert(response.data.msg);
                            window.location.href = "http://127.0.0.1/BBB/babai2/home.html";
                         }
                        
                    } else {
                        alert(response.data.msg);
                    }
    
                }
            });
        }

       
    })
    let vallogin = Cookie.get("login1");
    let valUsername = Cookie.get("phone");
    let valPassword = Cookie.get("password");
    if (vallogin) {
       $(".phone").val(valUsername);
       $(".pws").val(valPassword);
        $(".login-btn-submit").text("直接登陆");
        alert("您已保存密码，按确定直接登录");
        // $(".login-btn-submit").click(function(){
        //     d==2
            window.location.href = "http://127.0.0.1/BBB/babai2/home.html";
        // })
      
    }
})