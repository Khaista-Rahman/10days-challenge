

const btn = document.querySelector("#addBtn");
const inputBox = document.querySelector("#input_box");
const listContainer = document.querySelector(".list_container")

btn.addEventListener("click", () => {
  addTask()
})

function addTask(){
  if (inputBox.value === "") {
    alert('enter some text')
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    // create a span Element in li .


    let condition = 0;
              li.addEventListener("click" , function(){
                
                if (condition === 0) {
                  let checkMark = document.createElement('span');
                  checkMark.innerHTML = "&#10003;"
                  li.style.textDecoration = "line-through"
                  checkMark.style.backgroundColor = "green"
                  li.prepend(checkMark);
                  condition = 1;

                } else { 
                  if(li.querySelector('span')){
                    li.querySelector('span').remove();
                    li.style.textDecoration = "none";
                    span.style.textDecoration = "none"
                  }
                  condition = 0;
                }
                   })

    let span = document.createElement('span');
    span.innerHTML = "\u00d7"
    li.appendChild(span)

    span.addEventListener("click", function(e){
      li.remove()
    })
  }
  inputBox.value = "";

}