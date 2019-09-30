$(function(){
	// new Promise(function(){
		$.ajax({
			type: "get",
			url: "./server/firand.json",
			dataType: "json",
			success: function (response) {
				let data = response;
				// console.log(data);
				let html = data.map((ele)=>{
					let ulHTML=ele.list.map((ele,index)=>{
						return`
						<li><a href="http://www.800pharm.com/shop/groupId_1995.html" target="_blank" rel="noopener">${ele}</a></li>
						`;
					}).join("");
					return`
					<ul class="ft" style="display: none;">
					${ulHTML}
					 </ul>
					`;
				}).join("");
				$(".ttt").html(html);
				// 默认第二个 .ft 显示
				$(".ft").eq(1).css("display","block");
				// 将内容插入到.hd 后
				// $(".hd").appendTo(html);
				// console.log(html)
			},
			error: function() {
				console.log("++");
			}
		});

	// }).then(function(){
	
		$(".hd").children().mouseover(function(){
			$(this).addClass("cur").siblings().removeClass("cur");
		 index= $(this).index();
		 $(".ft").eq(index).css("display","block").siblings().css("display","none");
		 $(".hd").css("display","block");
		})
		// $(".hd").css("display","block");
	// })

	
   
})

 
