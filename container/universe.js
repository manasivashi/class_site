$(function(){

 $("select").on("change",function(){

  $("img").hide();
  $("."+this.value).show();

 });

});








// collect all the divs
var divs = document.getElementsByTagName('div');
// get window width and height
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

// i stands for "index". you could also call this banana or haircut. it's a variable
for ( var i=0; i < divs.length; i++ ) {
    
    // shortcut! the current div in the list
    var thisDiv = divs[i];
    
    // get random numbers for each element
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);
    
    // update top and left position
    thisDiv.style.top = randomTop +"0px";
    thisDiv.style.left = randomLeft +"0px";
    
}

