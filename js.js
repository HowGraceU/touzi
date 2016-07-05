function touzi(rX,rY){
  this.rotateX=rX;
  this.rotateY=rY;
  this.touzi=$("touzi");
  this.speedX=0;
  this.speedY=0;
  this.changeSpeed=function(value){
    switch (value) {
      case "上":  this.speedX+=1; break;
      case "下":  this.speedX-=1; break;
      case "左":  this.speedY-=1; break;
      case "右":  this.speedY+=1; break;
    }
  }
  this.move=function(){
    this.rotateX+=this.speedX;
    this.rotateY+=this.speedY;
    this.transform();
  }
  this.transform=function(){
      this.touzi.style.transform="rotateX("+this.rotateX+"deg) rotateY("+this.rotateY+"deg)";
      this.touzi.MsTransform="rotateX("+this.rotateX+"deg) rotateY("+this.rotateY+"deg)";
      this.touzi.WebkitTransform="rotateX("+this.rotateX+"deg) rotateY("+this.rotateY+"deg)";
      this.touzi.OTransform="rotateX("+this.rotateX+"deg) rotateY("+this.rotateY+"deg)";
      this.touzi.MozTransform="rotateX("+this.rotateX+"deg) rotateY("+this.rotateY+"deg)";
  }
};
$=function(id){
  return document.getElementById(id);
}
var oTouzi=new touzi(0,45);
var Timer=null;
$("key").onclick = function(ev){
  var event= ev || window.event;
  var target= event.target || event.srcElement;
  oTouzi.changeSpeed(target.value);
  clearInterval(Timer);
  Timer=setInterval(function(){
    console.log(oTouzi.speedX,oTouzi.speedY,oTouzi.rotateX,oTouzi.rotateY)
    oTouzi.move();
  },20)
}