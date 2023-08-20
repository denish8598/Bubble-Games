function makebubble(){var clutter=""
for(var i=0;i<133;i++){
clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;

}
document.querySelector("#pbtm").innerHTML = clutter;
}
var timer= 60;
function runtimer(){
var time = setInterval(function(){
    if(timer>0){
    timer--;
    document.querySelector("#timerval").textContent= timer;
    }
    else{
        clearInterval(time)
    }
    if(timer==0){
        document.querySelector("#pbtm").innerHTML = `<h1 class="gameover">Game Over</h1>`;
    }
},1000)

}
var hitrn
function hit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent=hitrn;

}
var score =0;
function scorecal(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
   var clickednumber = Number(dets.target.textContent);
   if(hitrn===clickednumber){
    scorecal();
    makebubble();
    hit();
   }
})
makebubble();
runtimer();
hit();
