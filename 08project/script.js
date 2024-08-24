let boxes = document.querySelectorAll('#game');
let button = document.querySelector('#Reset');
let trunO = true;


const points = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];




function showwinner(winner){
  document.querySelector('p').innerHTML = `the winner is : ${winner}`
}


function gameHandler(index){

  for (let point of points) {
    let pos1 = boxes[point[0]].innerHTML;
    let pos2 = boxes[point[1]].innerHTML;
    let pos3 = boxes[point[2]].innerHTML;
    if (pos1 !== "" && pos2 !== "" && pos3 !== ""){
      if (pos1 === pos2 && pos2 === pos3) {
        showwinner(pos1)
        boxes.forEach(box => {
          box.disabled = true;
        })
        return;
      }
    }
  }
}

function move(){
  boxes.forEach(box => {
    box.addEventListener("click", function(){
      if (box.innerHTML !== "") return;

      if (trunO === true) {
        box.innerHTML = "X"
        trunO = false
      }else{
        box.innerHTML = "O";
        trunO = true;
      }
     gameHandler();

    })
  })
  
}
move()


button.addEventListener("click", function(){
  boxes.forEach(box => {
    box.innerHTML = "";
    document.querySelector('p').innerHTML = "";
    boxes.forEach(box => {
      box.disabled = false;
    })
  })
})


  
