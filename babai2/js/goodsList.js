$(function () { 
        
    let urlA = location.href;
    console.log(urlA)
    function urls() {
        
        let urlB = urlA.split("?");
        return urlB[1];
    }
    let url = urls();
    
    $.ajax({
        type: "get",
        url: "../server/goodsList.php",
        data: `id=${url}`,
        dataType: "json",
        success: function (response) {
    
            let o = response.res[0];
            // console.log(o);
            console.log("+++");
            if(response.res[0]){
              $(".font18").get(0).innerText = o.name;
              $(".name1").get(0).innerText = o.name;
              $(".name2").get(0).innerText = o.title;
              $(".price_shang").get(0).innerText = o.price;
          
            }
           
  
        },
  
    });






 })