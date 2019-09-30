
$(function(){
    let phoneInput = $(".phone");
    let msgCodeInput = $(".sme");
    let msgCodeBtn = $(".get-note");
    let passwordInput = $(".pws");
    let btn=$(".btn-box");
    let check=$(".click");
    let aaa=$(".erroy");
    let bbb=$(".ppp");
    var a=0,b=0,c=0;
    var d=a+b+c;
    
    let phoneReg = /^1[3-9]\d{9}$/;
    let passwordReg = /^[a-zA-Z0-9]{6,16}$/;

    // (new Captcha({ lineNum: 10, dotNum: 20, length: 6, fontSize: 30 })).draw(document.querySelector('#captcha'), r => {
    //     console.log(r, '验证++++');
    //     imageCodeVal = r;
    // });


    // 手机号码验证
    phoneInput.blur(function() {
        /* 先获取输入框的值，检查和清理(空格|空) */
        var val = $(this).val().trim();
        if (val.length == 0) {
            bbb.text("手机号码不能为空!");
            aaa.slideDown(1);
            a=0;
            d=a+b+c;
                console.log("a="+a+",b="+b+"c="+c+"d="+d);
        } else {
            if (!phoneReg.test(val)) {
                bbb.text("手机号码不符合规范!");
                aaa.slideDown(1);
                a=0;
                d=a+b+c;
                console.log("a="+a+",b="+b+"c="+c+"d="+d);
            } else {
                $(this).parents(".form-item").removeClass("form-group-error");
                a=1;
                d=a+b+c;
                console.log("a="+a+",b="+b+"c="+c+"d="+d)
            }
        }
    })
    // 获取手机验证码
    msgCodeBtn.click(function(){
       
        var val=phoneInput.val();
        if(val.length==0 || !phoneReg.test(val)){
            aaa.slideDown(1);
        }else{
            let timeCount = 60;
            let timer = setInterval(function() {
                timeCount--;
                msgCodeBtn.text(`${timeCount} 秒`);
                if (timeCount == 0) {
                    clearInterval(timer);
                    msgCodeBtn.text(`获取验证码`);
                }
            }, 1000);
            // console.log("+++OK+++");
            /* 根据手机号码来发送短信即可！ */

            function getRandom(min, max) {
                return parseInt(Math.random() * (max - min + 1)) + min
            }

            function formatterDateTime() {
                var date = new Date()
                var month = date.getMonth() + 1
                var datetime = date.getFullYear() +
                    "" // "年"
                    +
                    (month >= 10 ? month : "0" + month) +
                    "" // "月"
                    +
                    (date.getDate() < 10 ? "0" + date.getDate() : date
                        .getDate()) +
                    "" +
                    (date.getHours() < 10 ? "0" + date.getHours() : date
                        .getHours()) +
                    "" +
                    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                        .getMinutes()) +
                    "" +
                    (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                        .getSeconds());
                return datetime;
            }

            num = getRandom(1000, 9999);
            // num = 999;
            $.ajax({
                type: 'post',
                url: 'http://route.showapi.com/28-1',
                dataType: 'json',
                data: {
                    "showapi_timestamp": formatterDateTime(),
                    "showapi_appid": '105009', //这里需要改成自己的appid
                    "showapi_sign": '51084e3ee1f34d5c86af6e0e3506a8fa', //这里需要改成自己的应用的密钥secret
                    "mobile": phoneInput.val().trim(),
                    "content": `{\"name\":\"牛二\",\"code\":\"${num}\",\"minute\":\"3\",\"comName\":\"杨某人的试验短信，勿回\"}`,
                    "tNum": "T150606060601",
                    "big_msg": ""
                },
                error: function(XmlHttpRequest, textStatus, errorThrown) {
                    alert("操作失败!");
                },
                success: function(result) {
                    console.log(result) //console变量在ie低版本下不能用
                    alert(result.showapi_res_code)
                }
            });
            console.log(num);
            
        }
    
    })

    phoneInput.click(function(){
        aaa.slideUp(1);
        phoneInput.css("border","1px solid blue");
    })
    phoneInput.blur(function(){
        phoneInput.css("border","none");
    })

    msgCodeInput.click(function(){
        aaa.slideUp(1);
        msgCodeInput.css("border","1px solid blue");
    })
    msgCodeInput.blur(function(){
        msgCodeInput.css("border","none");
    })

    passwordInput.click(function(){
        aaa.slideUp(1);
        passwordInput.css("border","1px solid blue");
    })
    passwordInput.blur(function(){
        passwordInput.css("border","none");
    })

    // 监听是否勾选《注册协议》
    setInterval(function(){
        let isChecked =check.is(":checked");
        if(isChecked){
            btn.css("background-color","#f1156f");
            btn.css("color","#fff");
        }else{
            btn.css("background-color","#e7e7e7e7");
            btn.css("color","#999");
        }
    },50)
   
    // 手机验证码验证
    msgCodeInput.blur(function() {

        console.log("+----");

        /* 先获取输入框的值，检查和清理(空格|空) */
        var val = $(this).val().trim();
        if (val.length == 0) {
            bbb.text("手机验证码不能为空!");
            aaa.slideDown(1);
            b=0;
            d=a+b+c;
         console.log("a="+a+",b="+b+"c="+c+"d="+d);
        } else {
            if (num != val) {
                bbb.text("手机验证码不正确!");
                aaa.slideDown(1);
                b=0;
                d=a+b+c;
                console.log("a="+a+",b="+b+"c="+c+"d="+d);
            } else {
                // $(this).parents(".form-item").removeClass("form-group-error");
                bbb.text("请输入正确的手机号码!");
                b=1;
                d=a+b+c;
                console.log("a="+a+",b="+b+"c="+c+"d="+d);
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
            c=0;
            d=a+b+c;
                console.log("a="+a+",b="+b+"c="+c+"d="+d);
        } else {
            if (!passwordReg.test(val)) {
                bbb.text("密码不符合规范!");
                aaa.slideDown(1);
                c=0;
                d=a+b+c;
                console.log("a="+a+",b="+b+"c="+c+"d="+d);
            } else {
                c=1;
                d=a+b+c;
                console.log("a="+a+",b="+b+"c="+c+"d="+d);
            }
        }
    })
   /* 002-点击注册的时候 */
    /* 思路:先获取标签添加点击事件，点击事件触发的时候，(1) 检查表单是否验证通过 (2) 检查是否勾选协议 */
    /* 如果满足条件，那么就把表单数据提交给后台 */




    // var d=3;
    // var phoneText=18376735428;
    // var passwordText=yzf123;




    btn.click(function(){
        let isChecked = check.is(":checked");
        if (!isChecked) {
            alert("请阅读并同意用户协议");
            return;
        } else {
            if (d!=3) {
                alert("请完善信息");
                return;
            } else {
                /* 把表单数据提交给服务器，注册操作  */
                console.log("___OK___");
                console.log(phoneInput.val());
                console.log(passwordInput.val());
                
                $.ajax({
                    type: "post",
                    url: "../server/api/register.php",
                    data: `phone=${phoneInput.val()}&password=${passwordInput.val()}`,
                    dataType: "json",
                    success: function(response) {
                        // console.log(response);
                        if (response.status == "success") {
                            alert(response.data.msg);
                            window.location.href = "http://127.0.0.1/BBB/babai2/html/login.html";
                        } else {
                            alert(response.data.msg);
                        }
                    }
                });

            }
        }
    })
})

