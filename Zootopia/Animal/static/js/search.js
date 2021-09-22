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

// 검색어 가져오기 메서드
function getSearchWord(){
  let url = decodeURIComponent(location.search);
  let searchWord = url.slice((url.indexOf('=')+1), url.length);
  searchWord = searchWord.replace(/\+/g , ' ');
  searchBox.value = searchWord;
}

searchForm.addEventListener("submit", preventEmptyBox);
getSearchWord();