let ageInput = document.querySelector('#ageinput');
let heightCm = document.querySelector('#weightcm');
let weightKg = document.querySelector('#weightkg');
let board = document.querySelector('#board');

let button = document.querySelector('button');

button.addEventListener("click", function(){
  calculateBMI()
})


function calculateBMI(){
  let inputAge = parseInt(ageInput.value);
  let inputHeightCm = parseInt(heightCm.value);
  let inputweightKg = parseInt(weightKg.value);

  if (!isNaN(inputHeightCm) && !isNaN(inputweightKg)) {
    let result = inputweightKg / inputweightKg;
    board.innerHTML = `BMI IS: ${result.toFixed(2)}`;
  } else {
    board.innerHTML = 'Please enter valid numbers for height and weight.';
  }

}