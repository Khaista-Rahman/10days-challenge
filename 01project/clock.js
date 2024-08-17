let hour = document.querySelector('#hour');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');
let span = document.querySelector('span');

function setTimeHundler(){
  let time = new Date()

  let minutes = time.getMinutes()
  let hours = time.getHours()
  let seconds = time.getSeconds()

  hour.innerHTML = hours;
  min.innerHTML = minutes;
  sec.innerHTML = seconds;
}


setInterval(setTimeHundler, 1000);

let days = document.querySelector('#days');
let datee = document.querySelector('#date');
let months = document.querySelector('#months');
let years = document.querySelector('#years');

function createDate(){
  let date = new Date()

  let mydate = date.getDate()
  let dayOfweeks = ["Sunday" ,"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let myday =  dayOfweeks[date.getDay()]
  let mymonths = date.getMonth()
  let myyears = date.getFullYear()

  days.innerHTML = `${myday}`
  datee.innerHTML = mydate;
  months.innerHTML = `/${mymonths}`;
  years.innerHTML = `/${myyears}`
}

createDate()

setInterval(createDate , 579470000)