// 选项卡数据获取
var data = [];
var oUl = document.querySelector(".sort-item");
var oli = oUl.querySelectorAll(".sort-item-box");
for(var i = 0; i < oli.length; i++){
    var obj = {};
    var li = oli[i];
    obj.title = li.querySelector(".sib-abox").innerText;
    obj.details = [];
    var items = li.querySelectorAll(".sort-detail-list dl");
    for (j = 0; j < items.length; j++) {
                var o = {};
                var item = items[j];
             if(item.querySelector("dt a")) {
                    o.title =item.querySelector("dl dt a").innerText
                }else{
                    o.title =""
                };
                o.items = [];
                var oAs = item.querySelectorAll("dd a");
                for (var k = 0; k < oAs.length; k++) {
                                o.items.push(oAs[k].innerText);
                            }
                            obj.details.push(o);
    }
    data.push(obj);
}
JSON.stringify(data)


// 特价热卖
var data = [];
var oli = document.querySelectorAll(".main-sell-item");
for(var i=0;i<oli.length;i++){
    var o={}
    li=oli[i];
  o.img=li.querySelector(".pd-img").src;
  o.name=li.querySelector(".pd-name").innerText;
  o.title=li.querySelector(".pd-desp").innerText;
  o.pri=li.querySelector(".pd-price em").innerText;
  o.del=li.querySelector(".pd-price del").innerText;
data.push(o)
}
console.log(data)

// 每日优惠
var data = [];
var oli = document.querySelectorAll(".daily-sell-item");
for(var i=0;i<oli.length;i++){
    var o={}
    li=oli[i];
  o.img=li.querySelector(".pd-img").src;
  o.name=li.querySelector(".pd-name").innerText;
  o.title=li.querySelector(".pd-desp").innerText;
  o.pri=li.querySelector(".pd-price em").innerText;
  o.del=li.querySelector(".pd-price del").innerText;
data.push(o)
}
console.log(data)




// 明星商家
var data = [];
var oaa = document.querySelector(".brand-rec-list");
var oli = oaa.querySelectorAll(".brand-rec-item");
console.logo(oli)
for(var i=0;i<oli.length;i++){
    var o={}
    li=oli[i];
  o.heaImg=li.querySelector(".header-img").src;
  o.scen=[];
  var oul = document.querySelectorAll(".dpd-item");
  for(j=o;j<oul.length;j++){
      var b={};
      ul=oul[j];
       b.img=ul.querySelector(".pd-img").src;
        b.name=ul.querySelector(".pd-name").innerText;
        b.pri=ul.querySelector(".pd-price em").innerText;
        b.del=ul.querySelector(".pd-price del").innerText;
        o.scen.push(b);
  }
// data.push(o)

}

// 药品分类数据获取
var oli = document.querySelectorAll(".cate-item");
for(var i=0;i<oli.length;i++){
  var o={}
  li=oli[i];
o.name=li.querySelector(".cate-tag").innerText;

console.log(o.name)
}


// 友情链接
var hd = Array.from(document.querySelectorAll('.hd li'));
var ft = Array.from(document.querySelectorAll('ul.ft'));
var arr = [];
var arr2 = [];
hd.forEach(li => {
    var obj = {};
    obj.name = li.innerText;
    arr.push(obj);
})


ft.forEach(ul => {
  var obj = {};
  obj.list = [];
  // console.log(ul);
  var ulist = Array.from(ul.children);
  console.log(ulist);
  ulist.forEach(li => {
      obj.list.push(li.innerText)
  });
  arr2.push(obj)
});
JSON.stringify(arr2)


// 二层渲染
$('body').html(data.map(ul => {
  return `<ul class='hd'>${ul.list.map(li=>{
      return `<li><a href="">${li}</a></li>`
  }).join('')}</ul>?`
}).join(''))


