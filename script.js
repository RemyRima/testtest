
 function stars(){
   var star = [];
   var x = document.querySelector(".stars");
   for(var i=1;i<=3;i++){
   star[i] = document.createElement("div");
   star[i].className="star"+i;
   star[i].style.left = Math.floor((Math.random()*99)+1)+"%";
   star[i].style.bottom = Math.floor((Math.random()*99)-1)+"vh";
   x.appendChild(star[i]);
   }
 }
function cStars(ilosc){
  for (var i=1; i<=ilosc; i++){
    stars();
  }
} 
cStars(60);

setInterval(move,400);
setInterval(move1,200);
setInterval(move2,100);
var szukaj = document.querySelectorAll('.star1');
var szukaj1 = document.querySelectorAll('.star2');
var szukaj2 = document.querySelectorAll('.star3');
function move(){
  for(var i=0;i<szukaj.length; i++){
    szukaj[i].style.bottom = parseInt(szukaj[i].style.bottom)+1+"vh";
    if(szukaj[i].style.bottom == "111vh"){
      szukaj[i].style.bottom = "-2vh";
       szukaj[i].style.transitionDuration = "0ms";
    }else if(szukaj[i].style.bottom == "0vh"){
      szukaj[i].style.transitionDuration = "600ms";
    }
  }
}
function move1(){
  for(var i=0;i<szukaj1.length; i++){
    szukaj1[i].style.bottom = parseInt(szukaj1[i].style.bottom)+1+"vh";
    if(szukaj1[i].style.bottom == "111vh"){
      szukaj1[i].style.bottom = "-2vh";
       szukaj1[i].style.transitionDuration = "0ms";
    }else if(szukaj1[i].style.bottom == "0vh"){
      szukaj1[i].style.transitionDuration = "300ms";
    }
  }
}
function move2(){
  for(var i=0;i<szukaj1.length; i++){
    szukaj2[i].style.bottom = parseInt(szukaj2[i].style.bottom)+1+"vh";
    if(szukaj2[i].style.bottom == "111vh"){
      szukaj2[i].style.bottom = "-2vh";
       szukaj2[i].style.transitionDuration = "0ms";
    }else if(szukaj2[i].style.bottom == "0vh"){
      szukaj2[i].style.transitionDuration = "150ms";
    }
  }
}
 
 
