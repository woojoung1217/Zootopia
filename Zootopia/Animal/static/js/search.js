const searchForm = document.querySelector("#search-form");
const searchBox = document.querySelector("#search-box");

// 빈 박스 방지 메서드
function preventEmptyBox(event){
  if(searchBox.value==""){
    event.preventDefault(); 
  }
}

// 이전 페이지 이동 메서드
function goBackPage(){
  window.history.back();
}

searchForm.addEventListener("submit", preventEmptyBox);