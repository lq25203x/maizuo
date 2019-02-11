var ul=document.getElementById("ul");
// var lft=document.getElementById("lft");
// var rht=document.getElementById("rht");
var olis=document.querySelectorAll("#mj li")
var mz=document.getElementById("mz")
var timer=null;
var i=0;
autoPlay();
for(var k=0;k<olis.length;k++){
    olis[k].index=k;
    olis[k].onclick=function(){
        if(this.index>i){
            movel(ul,"left",-520*this.index)
        }else{
        movel(ul,"right",-520*this.index)
    }
    i=this.index;	
    pageCss();
    
    }
}
//运动函数
function movel(ele,dir,end){
    clearInterval(ele.timer);
    if(dir==="right"){
        ele.timer=setInterval(function(){
            ele.style.left=ul.offsetLeft+20+"px"
            if(ele.offsetLeft>=end){
                //停止定时器
                clearInterval(ele.timer);
                ele.style.left=end+"px";//强制回到对应位置
            }
        },10)
    }else{
        ele.timer=setInterval(function(){
            ele.style.left=ele.offsetLeft-20+"px"
            if(ele.offsetLeft<=end){
                //停止定时器
                clearInterval(ele.timer);
                ele.style.left=end+"px";//强制回到对应位置
            }
        },10)
    }
}
//页码变色
function pageCss(){
    for(var t=0;t<olis.length;t++){
        olis[t].style.background="#fff";
    }
    olis[i===8?0:i].style.background="#ff5000"
}
//开启定时器
function autoPlay(){
    timer=setInterval(function(){
        i++;
        if(i>=9){
            ul.style.left="0px";
            i=1;
        }
        movel(ul,"left",-1360*i)
        pageCss();
    },3500)
}






$(".fth").on("click",function(){
    $(this).css("color","#ff9665").siblings(".fth").css("color","#333")
    $(".main").eq($(this).index()).css("display","block").siblings(".main").css("display","none")
})







$(".main:eq(3)").on("click",function(ev){
    
    if(ev.target.nodeName==="LI"||ev.target.nodeName==="IMG"||ev.target.nodeName==="SPAN"){
        // console.log(ev.target)
       window.location.href="登录.html"  
    }

})




$(".video").on("click",function(ev){

    if(ev.target.className==="vide"){
        $("#jjsy").css("display","block")
    $("#zzry").css("display","none")
    $(".vide").css("color","#ff5500").css("border-bottom","1px solid #ff5500")
    $(".vid").css("color","#333").css("borderBottom","none")
    }
    if(ev.target.className==="vid"){
        $("#zzry").css("display","block")
    $("#jjsy").css("display","none")
    $(".vid").css("color","#ff5500").css("border-bottom","1px solid #ff5500")
    $(".vide").css("color","#333").css("borderBottom","none")
    }
})

window.onscroll=function(){

    var a=document.documentElement.scrollTop;
    if(a>200){
        $(".video").css("display","block")
    }else{
        $(".video").css("display","none")
    }
}