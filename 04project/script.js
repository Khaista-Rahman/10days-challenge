
let time = document.querySelector("#time")
let date = document.querySelector("#date")
let inputYear = document.querySelector("#year");
let inputMonth = document.querySelector("#month");
let inputDate = document.querySelector("#inputDate");
let button = document.querySelector("button")

let yBoard = document.querySelector('#yearBoard');
let mBoard = document.getElementById('monthBoard');
let dBoard = document.getElementById('dateBoard');

function setTimeHundler(){

  let currTime = new Date()

  let currentHour = currTime.getHours();
  let currentMin = currTime.getMinutes();
  let currentsec = currTime.getSeconds();

  let currentDate = currTime.getDate();
  let currentMonth = currTime.getMonth();
  let currentYear = currTime.getFullYear();

  time.innerHTML = `TIME : ${currentHour} : ${currentMin} : ${currentsec}`
  date.innerHTML = `DATE : ${currentYear} / ${currentMonth} / ${currentDate}`

}

setInterval(setTimeHundler, 1000);



button.addEventListener("click", function(){

  let currTime = new Date()

  let yearValue = parseInt(inputYear.value);
  let monthValue = parseInt(inputMonth.value);
  let dateValue = parseInt(inputDate.value);

  let currentDate = currTime.getDate();
  let currentMonth = currTime.getMonth();
  let currentYear = currTime.getFullYear();

  if (yearValue === currentYear && 
    dateValue === currentDate
    && monthValue === currentMonth) {

    alert("oops! enter your date of birth")

  } else if(yearValue !== currentYear && yearValue > 0){

   let age = currentYear - yearValue;
   console.log(age)
   yBoard.innerHTML = `Total age : ${age}`;

   let cMonths = 12 * age;
   mBoard.innerHTML = `Total Months :${cMonths}`;

   let cdate = 30 * 12 * age;
   dBoard.innerHTML = `total days : ${cdate}`
  } 

  inputDate.value = "";
  inputMonth.value = "";
  inputYear.value = "";
})

