const selected = document.querySelector(".selected");
const deselected = document.querySelectorAll(".nav-manu");

function toggleSelected(event){
  console.log(`${event} ok`);
}

function test(event){
  console.log(event);
}

selected.addEventListener("click", test);

for(manu in deselected){
  manu.addEventListener("click", toggleSelected);
}
