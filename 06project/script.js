let mili = document.querySelector('#mili');
let sec = document.querySelector('#sec');
let min = document.querySelector('#min');
let start = document.querySelector('#start');
let stoop = document.querySelector('#stop');
let reset = document.querySelector('#reset');

let rSecond , rMinute;
let animated;
let running = false;
let minute = 0;
let second = 0;

start.addEventListener("click", function(){
  if(!running){

    running = true;

  function updateMiliSec(){
    let date = new Date();
    let milisec = date.getMilliseconds()
    mili.innerHTML = milisec;

    animated = requestAnimationFrame(updateMiliSec);
  }
    animated = requestAnimationFrame(updateMiliSec);

  
    rSecond = setInterval(() => {
    second ++;
    sec.innerHTML = second;
  }, 1000);

    rMinute = setInterval(() => {
    minute ++;
    min.innerHTML = minute;
  }, 60000);
  }
});

stoop.addEventListener("click" , function(){
  if(running){
    running = false;

    cancelAnimationFrame(animated);

    clearInterval(rSecond);
    clearInterval(rMinute);
  }
})

reset.addEventListener("click", function(){
  if(!running){

    minute = "0";
    second = "0";
    mili.innerHTML = "00";
    min.innerHTML = "00";
    sec.innerHTML = "00";
  }
})

