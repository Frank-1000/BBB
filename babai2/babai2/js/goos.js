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


})

