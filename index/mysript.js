var play=document.getElementById("play");
var sleep=document.getElementById("personSleep");
var phone=document.getElementById("waterPhone");
var boy=document.getElementById("boyGirls");
    sleep.style.left="0px";
    //phone.style.zIndex="8";
    //sleep.style.zIndex="9";
    //boy.style.zIndex="7";
    phone.style.left="1349px";
    boy.style.left="1349px";
    var a=1;
var des=document.getElementsByClassName("describe")[0];
var des1=document.getElementsByClassName("describe1")[0];
var des2=document.getElementsByClassName("describe2")[0];
window.onload=function(){
   setTimeout(function(){
       des.style.webkitTransform="translate(0,0)";
   },300);
};
function playone(){
    //alert(a);
    if(a==2){
        sleep.style.left="0px";
        phone.style.left="-1349px";
        phone.style.webkitTransition="all 0.5s linear";
        sleep.style.webkitTransition="all 0.3s linear";
        boy.style.left="1349px";
        setTimeout(function(){
            phone.style.zIndex="5";
            sleep.style.zIndex="10";
            phone.style.left="1349px";
            phone.style.webkitTransition="";
        },600);
        des1.style.webkitTransform="translate(0,400px)";
        setTimeout(function(){
            des.style.webkitTransform="translate(0,0)";
        },800);


        a=1;
    }else if(a==3){
        sleep.style.left="0px";
        phone.style.left="1349px";
        boy.style.left="-1349px";
        boy.style.webkitTransition="all 0.5s linear";
        sleep.style.webkitTransition="all 0.3s linear";
        setTimeout(function(){
            boy.style.zIndex="7";
            sleep.style.zIndex="8";
            boy.style.left="1349px";
            boy.style.webkitTransition="";
        },600);
        des2.style.webkitTransform="translate(0,400px)";
        setTimeout(function(){
            des.style.webkitTransform="translate(0,0)";
        },800);

        a=1;

    }
    clearInterval(myAuTo);
    //sleep.style.webkitTransition="all 0.5s linear";
    //setTimeout(function(){
    //    des.style.webkitTransform="translate(0,0)"
    //},1000);
    //des.style.webkitTransition="all 0.5s linear";
}
function playtwo() {
    //alert(a);
    if(a==1) {
        phone.style.left = "0px";
        boy.style.left = "1349px";
        sleep.style.left = "-1349px";
        sleep.style.webkitTransition = "all 0.5s linear";
        phone.style.webkitTransition = "all 0.3s linear";
        a=2;
        setTimeout(function () {
            sleep.style.zIndex="8";
            phone.style.zIndex="9";
            sleep.style.left = "1349px";
            sleep.style.webkitTransition = "";
        }, 600);
        des.style.webkitTransform="translate(0,400px)";
        setTimeout(function(){
            des1.style.webkitTransform="translate(0,0)";
        },800);
        des1.style.zIndex="20";

    } else if(a==3) {
        phone.style.left = "0px";
        boy.style.left = "-1349px";
        sleep.style.left = "1349px";
        boy.style.webkitTransition = "all 0.5s linear";
        phone.style.webkitTransition = "all 0.3s linear";
        a=2;
        setTimeout(function () {
            boy.style.zIndex="8";
            phone.style.zIndex="9";
            boy.style.left = "1349px";
            boy.style.webkitTransition = "";
        }, 600);
        des2.style.webkitTransform="translate(0,400px)";
        setTimeout(function(){
            des1.style.webkitTransform="translate(0,0)";
        },800);
    }
    clearInterval(myAuTo);
}

    //setTimeout(function(){
    //    sleep.style.left="1349px";
    //},1000);
    //phone.style.webkitTransition="all 0.5s linear";
//    setTimeout(function(){
//        des1.style.webkitTransform="translate(0,0)";
//    },1000);
//    des1.style.webkitTransition="all 0.5s linear";
//
//}
function playthree() {
    if (a == 2) {
        sleep.style.left = "1349px";
        phone.style.left = "-1349px";
        phone.style.webkitTransition = "all 0.5s linear";
        boy.style.webkitTransition = "all 0.3s linear";
        boy.style.left = "0px";
        setTimeout(function () {
            phone.style.zIndex = "8";
            boy.style.zIndex = "9";
            phone.style.left = "1349px";
            phone.style.webkitTransition = "";
        }, 600);
        a = 3;
        des1.style.webkitTransform = "translate(0,400px)";
        setTimeout(function () {
            des2.style.webkitTransform = "translate(0,0)";
        }, 800);
    } else if (a == 1) {
        sleep.style.left = "-1349px";
        sleep.style.webkitTransition = "all 0.5s linear";
        boy.style.webkitTransition = "all 0.3s linear";
        phone.style.left = "1349px";
        boy.style.left = "0px";
        a = 3;
        setTimeout(function () {
            sleep.style.zIndex = "8";
            boy.style.zIndex = "9";
            sleep.style.webkitTransition = "";
            sleep.style.left = "1349px";
        }, 600);
        setTimeout(function () {
            des.style.webkitTransform = "translate(0,400px)";
        }, 600);

        setTimeout(function () {
            des2.style.webkitTransform = "translate(0,0)";
        }, 800);

    }


    setTimeout(function () {
        des2.style.webkitTransform = "translate(0,0)";
    }, 1000);
    setTimeout(function () {
        phone.style.left = "1349px";
    }, 1000);
    des2.style.webkitTransition = "all 0.5s linear";
    clearInterval(myAuTo);

}
var myAuTo;
window.onload=function(){
     myAuTo=setInterval(aoTu,4000);
    des.style.webkitTransform="translate(0,0)";
};
//function repit(){
//    myAuTo=setInterval(aoTu,4000);
//}

function aoTu(){
    if(a==1){
        playtwo();
        a=2;
    }else if(a==2){
        playthree();
        a=3;
    }else if(a==3){
        playone();
        a=1;
    }
}
//导航条效果
window.onscroll=function(){
    var gt=document.body.scrollTop;
    var line=document.getElementsByClassName("line")[0];
    var logo=document.getElementsByClassName("logo")[0];
    var line1=line.getElementsByTagName("div");
    var daohang=document.getElementsByClassName("daohang")[0];
    if(gt>100){
        daohang.style.position="absolute";
        daohang.style.position="fixed";
        daohang.style.top="0px";
        daohang.style.background="white";
        daohang.style.opacity="0.8";
        daohang.style.webkitTransition="all 0.2s linear";
        logo.style.zIndex="900";
        logo.style.color="black";
        for( var i=0;i<line1.length;i++){
            line1[i].style.background="black";
        }
    }else{
        daohang.style.top="-45px";
        daohang.style.background="#8deacd";
        logo.style.color="white";
        for( var i=0;i<line1.length;i++){
            line1[i].style.background="white";
        }
    }
}
//返回顶部效果
var timeout1;
function hr(){
    document.body.scrollTop=document.body.scrollTop-10;
    if(parseInt(document.body.scrollTop)==0){
        clearInterval(timeout1);
    }
}
function backup(){
    timeout1=setInterval("hr()",10);
}