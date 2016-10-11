console.log('Loaded!');
//change the etxt
var element = document.getElementById('main-text');
element.innerHTML='new stuff';
var img= documnet.getElementById(madi);
var m=0;
function moveRight(){
    m=m+1;
    img.style.m=m+'px';
    
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};