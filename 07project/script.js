let button = document.querySelector('button');



button.addEventListener("click", function(){

  let nav = document.querySelector('.nav');
  let container = document.querySelector('.container');
  let inputColor = document.querySelector('#inputColor');
  let body = document.querySelector('body');
  let colorName = inputColor.value.trim().toLowerCase();


  const RandomColor = ["red", "blue", "white", "yellow", "pink", "darkblue", "aqua", "aquamarine", "brown", "chocolate", "darkgray", "green", "darkgreen", "darkred", "purple", "black", "greenyellow", "gold", "goldenrod","gray"];
  if(colorName === ""){
    alert("enter color name")
  }else if(colorName === "red"){ 

    container.style.backgroundColor = "red"
    nav.style.backgroundColor = "blue";
    nav.style.color = "black";
    body.style.backgroundColor = "yellow";

   }else if(colorName === "blue"){

    container.style.backgroundColor = "blue"
    nav.style.backgroundColor = "skyblue";
    nav.style.color = "black";
    body.style.backgroundColor = "green";

   }else if(colorName === "white"){

    container.style.backgroundColor = "white"
    nav.style.backgroundColor = "#BEB7A4";
    nav.style.color = "black";
    body.style.backgroundColor = "black";

   }else if(colorName === "pink"){
    
    container.style.backgroundColor = "pink"
    nav.style.backgroundColor = "#FFDB58";
    nav.style.color = "black";
    body.style.backgroundColor = "#E6DADA";

   }else if(colorName === "aqua"){
    
    container.style.backgroundColor = "aqua"
    nav.style.backgroundColor = "white";
    nav.style.color = "black";
    body.style.backgroundColor = "coral";

   }else if(colorName === "aquamarine"){
    
    container.style.backgroundColor = "aquamarine"
    nav.style.backgroundColor = "khaki";
    nav.style.color = "black";
    body.style.backgroundColor = "peachpuff";

   }else if(colorName === "chocolate"){
   
    container.style.backgroundColor = "chocolate"
    nav.style.backgroundColor = "#7B3F00";
    nav.style.color = "white";
    body.style.backgroundColor = "#2F1800";

   }else if(colorName === "darkgray"){
  
    container.style.backgroundColor = "darkgray"
    nav.style.backgroundColor = "white";
    nav.style.color = "black";
    body.style.backgroundColor = "black";

   }else if(colorName === "green"){
    
    container.style.backgroundColor = "green"
    nav.style.backgroundColor = "lightgreen";
    nav.style.color = "black";
    body.style.backgroundColor = "lightblue";

   }else if(colorName === "darkgreen"){
    
    container.style.backgroundColor = "darkgreen"
    nav.style.backgroundColor = "#355E3B";
    nav.style.color = "white";
    body.style.backgroundColor = "#8A9A5B";

   }else if(colorName === "darkred"){
    
    container.style.backgroundColor = "darkred"
    nav.style.backgroundColor = "white";
    nav.style.color = "black";
    body.style.backgroundColor = "red";

   }else if(colorName === "purple"){
   
    container.style.backgroundColor = "purple"
    nav.style.backgroundColor = "#AFBF48";
    nav.style.color = "black";
    body.style.backgroundColor = "#B24BB2";

   }else if(colorName === "black"){
    
    container.style.backgroundColor = "black"
    nav.style.backgroundColor = "#CA2C92";
    nav.style.color = "black";
    body.style.backgroundColor = "#E5F4E3";

   }else if(colorName === "greenyellow"){
    
    container.style.backgroundColor = "greenyellow"
    nav.style.backgroundColor = "#1982c4";
    nav.style.color = "black";
    body.style.backgroundColor = "#ff595e";

   }else if(colorName === "gold"){
   
    container.style.backgroundColor = "gold"
    nav.style.backgroundColor = "black";
    nav.style.color = "white";
    body.style.backgroundColor = "#FEF250";

   }else if(colorName === "goldenrod"){
   
    container.style.backgroundColor = "goldenrod"
    nav.style.backgroundColor = "white";
    nav.style.color = "black";
    body.style.backgroundColor = "lightgray";

   }else if(colorName === "yellow"){
    
    container.style.backgroundColor = "yellow"
    nav.style.backgroundColor = "#28334AFF";
    nav.style.color = "white";
    body.style.backgroundColor = "#F65058FF";

   }else if(colorName === "gray"){
  
    container.style.backgroundColor = "gray"
    nav.style.backgroundColor = "white";
    nav.style.color = "black";
    body.style.backgroundColor = "#85BCC7";

   }else{
    alert('oops! we have not that color')
   }
   inputColor.value = ""
})