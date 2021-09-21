const selected = document.querySelector(".selected");
const manues = document.querySelectorAll(".nav-manu");
const searchBox = document.querySelector("#search-box");

// 네비게이션 탭 선택 전환 메서드
function toggleSelected(event){
  for(let i = 0; i < manues.length; i++){
    manues[i].classList.remove("selected-manu");
    manues[i].children[0].classList.remove("selected-title")
  }
  event.currentTarget.classList.add("selected-manu");
  event.currentTarget.children[0].classList.add("selected-title");
}

// 이전 페이지 이동 메서드
function goBackPage(){
  window.history.go(-1);
}

// 검색어 가져오기 메서드
function getSearchWord(){
  let url = location.search; 
  const searchWord = url.slice((url.indexOf('=')+1), url.length);
  searchBox.value = searchWord;
}

for(let i = 0; i< manues.length; i++){
  manues[i].addEventListener("click", toggleSelected);
}

getSearchWord();