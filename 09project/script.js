let eye = document.querySelector('#hide');
let inputPass = document.querySelector('#inputPass');
let eyeCondition = true;


eye.addEventListener("click" , function(){
  if(eyeCondition === true){
    inputPass.type = "text"
    eye.style.backgroundImage = "url(images/open.png)";
    eyeCondition = false;
  }else{
    inputPass.type = "password";
    eye.style.backgroundImage = "url(images/close.png)"
    eyeCondition = true;
  }
});

function changeColorWithCondition(){
  let inputPass = document.querySelector('#inputPass');
  let passwordLength = inputPass.value.length;

  if(passwordLength < 5){

    inputPass.style.backgroundColor = "red";
  }else if(passwordLength <= 8){

    inputPass.style.backgroundColor = "orange";
  }else{

    inputPass.style.backgroundColor = "green"
  }
}

document.querySelector('#inputPass').addEventListener("input" , changeColorWithCondition)


let button = document.querySelector("#submite");
let para = document.querySelector('p'); 

button.addEventListener("click", function (){

  let RandomNum = Math.floor(Math.random() * 1000);
  setTimeout(() => {

    para.innerHTML = `${inputPass.value}${RandomNum}`

  }, 2000);
})