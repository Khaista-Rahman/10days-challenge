let inputPreNum = document.querySelector("#pre_input");
let inputCurrNum = document.querySelector("#curr_input");
let button = document.querySelector('button');
let price = document.querySelector('#priceTag');
let units = document.querySelector('#unitTag')


button.addEventListener("click", function(){
 
  function calculating(){

    preValue = parseInt(inputPreNum.value);
    currValue = parseInt(inputCurrNum.value);
    let final = currValue - preValue;

    if(preValue > currValue){
      
      alert('oops! enter right units');
    }else if(preValue.value== '-'){

      alert('invalid value');

    }else if(final > 100){

      let amount = final * 32;
      units.innerHTML = `Total Units : ${final}`
      price.innerHTML = `Total amount : ${amount}`;

    }else if(final < 100){

      let amount = final * 15;
      units.innerHTML = `Total Units : ${final}`
      price.innerHTML = `Total amount : ${amount}`;

    }
  }
calculating()

})