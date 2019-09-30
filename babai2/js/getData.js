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


// 商品列表数据获取
var data = [];
var oli = document.querySelectorAll(".mod");
for(var i=0;i<oli.length;i++){
    var o={}
    li=oli[i];
  o.img=li.querySelector(".pic a img").src;
  o.name=li.querySelector(".tit a").innerText;
  o.title=li.querySelector(".gnzz").innerText;
  o.title2=li.querySelector(".c_name").innerText;
  o.pri=li.querySelector(".pdPrice").innerText;
  o.a=li.querySelector(".goNextBtn").innerText;
data.push(o)
}
JSON.stringify(data)
  
  
var oLis = $(".floor-t5 .col");
var data = [];
oLis.each(function (index) {
    let o = {};
    o.title = this.querySelectorAll(".header-name")[0].innerText;
    o.bigSrc = this.querySelectorAll(".bz-cover img")[0].src;
    o.smSrcA = this.querySelectorAll(".bz-more img")[0].src;
    o.smSrcB = this.querySelectorAll(".bz-more img")[1].src;
    o.imgList = [];
    let imgs = Array.from(this.querySelectorAll('.bz-bi-item'));
    imgs.forEach(ele => {
        var obj = {};
        obj.title = ele.querySelector('.bz-bi-tit').innerText;
        obj.name = ele.querySelector('.bz-bi-promo').innerText;
        obj.src = ele.querySelector('.bz-bi-img').src;
        o.imgList.push(obj);
    })
    data.push(o)
})



// 明星商家数据获取
var olis = $(".brand-rec-list").children(".brand-rec-item");
var data = [];
olis.each(function(index) {
    let o = {};
    o.src = this.querySelector(".header-img").src;
    o.title = this.querySelector(".header-name").innerText;
    o.p=this.querySelector(".pd-bottom").innerText;
    o.ul=[];
    let imgs=Array.from(this.querySelectorAll('.pd-item'));
    imgs.forEach(ele=>{
      var obj={};
      obj.img=ele.querySelector(".pd-img").src;
      obj.name=ele.querySelector(".pd-name").innerText;
      obj.pri=ele.querySelector(".pd-price em").innerText;
      obj.del=ele.querySelector(".pd-price del").innerText;
      o.ul.push(obj);
    })
    data.push(o);
})
console.log(data)

// 楼层效果数据获取
var odiv = $(".main-floor-box");
var data=[];
odiv.each(function(){
  let o={};
  o.h2 = this.querySelector("h2").innerText;
  o.src = this.querySelector(".floor-main-content a img").src;
  o.src2 = this.querySelector(".floor-side-img a img").src;
  o.top=[];
  let imgs=Array.from(this.querySelectorAll('.floor-rec-list a'));
  imgs.forEach(ele=>{
   var obj={}
   obj.a=ele.innerText;
   o.top.push(obj);
  })
  o.dl=[];
let imgss=Array.from(this.querySelectorAll('.floor-side-rec a'));
imgss.forEach(ele=>{
  var bbj={};
  bbj.a=ele.innerText;
  o.dl.push(bbj);
})
 o.list=[];
 let imgsss=Array.from(this.querySelectorAll('.floor-extra-item'));
imgsss.forEach(ele=>{
  ojj={};
  ojj.img=ele.querySelector(".pd-img").src;
  ojj.name=ele.querySelector(".pd-name").innerText;
  ojj.title=ele.querySelector(".pd-desp").innerText;
  ojj.pri=ele.querySelector(".pd-price em").innerText;
  ojj.del=ele.querySelector(".pd-price del").innerText;
  o.list.push(ojj)
})

  data.push(o)
})
console.log(data)