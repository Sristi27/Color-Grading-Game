var numsquares= 6;
var square=document.getElementsByClassName("squares");
var colordisplay=document.getElementById("colordisplay");
var colors=generaterandomcolors(numsquares);
var pickedcolor= pickcolor(numsquares);
var message=document.getElementById("message");
var h=document.getElementsByTagName("h1");
var btn=document.getElementById("reset");
var esy=document.getElementById("esy");
var hrd=document.getElementById("hrd");
colordisplay.textContent=pickedcolor;


//for easy button
esy.addEventListener("click",function(){
  
  esy.classList.add("selected");
  hrd.classList.remove("selected");
  numsquares=3;
  colors=generaterandomcolors(numsquares);
  pickedcolor=pickcolor(numsquares);
  colordisplay.textContent=pickedcolor;
  for(var i=0;i< square.length;i++){
    if(colors[i]){
    square[i].style.background=colors[i];
  }
    else{
      square[i].style.display="none";
    }
  }
  h[0].style.background="steelblue";
  btn.textContent="new colors";
  
});

//for hard button
hrd.addEventListener("click",function(){

  numsquares=6;
  hrd.classList.add("selected");
  esy.classList.remove("selected");
  colors=generaterandomcolors(numsquares);
  pickedcolor=pickcolor(numsquares);
  colordisplay.textContent=pickedcolor;
  for(var i=0;i< square.length;i++){
    
    square[i].style.background=colors[i];
    square[i].style.display="block";
    }
  
  h[0].style.background="steelblue";
  
  
});

//generate new colors and pick random color
btn.addEventListener("click",function(){
  
  colors=generaterandomcolors(numsquares);
  pickedcolor= pickcolor(numsquares);
  colordisplay.textContent=pickedcolor;
  message.textContent="";
  btn.textContent="New colors";
  for(var i=0;i<square.length;i++){
    square[i].style.background = colors[i];
}
  h[0].style.background="steelblue";

});
//set the div colors to the colors in the array
for(var i=0;i<square.length;i++){
    square[i].style.background = colors[i];
}

//for correct and wrong answers
for(var i=0;i<square.length;i++){
  square[i].addEventListener("click",function(){
    var clickedcolor = this.style.background;
    if (clickedcolor === pickedcolor){
      message.textContent="Correct!"
      changecolors(clickedcolor);
      h[0].style.background=clickedcolor;
      btn.textContent="Play Again?"
    }
    else{
     this.style.background="grey";
      message.textContent="Try Again";
    }
  });
}

//to change the colors of the rest if correct is found
function changecolors(color){
  for(var i=0;i<square.length;i++){
    square[i].style.background=color;
  }
}

//picks a random color between 0 and 6 of te=he length of the array
function pickcolor(n){
  var rand=Math.floor(Math.random()*n);
  return colors[rand];
}

//for 6 or 3(easy and hard)
function generaterandomcolors(n){
  var arr=[];
  for(var i=0;i<n;i++){
    arr.push(randomcolor());
  }
  return arr;
}
//for generating 6/3 different colors
function randomcolor(){
  //random color between 0 and 255
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);
  var s="rgb(" + r +", " +g+", " +b +")";
  return s;
}
