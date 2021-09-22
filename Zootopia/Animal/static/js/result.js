const selected = document.querySelector(".selected");
const manues = document.querySelectorAll(".nav-manu");
const searchBox = document.querySelector("#search-box");

// 네비게이션 메뉴
const integrated = document.querySelector("#integrated");
const address = document.querySelector("#address");
const species = document.querySelector("#species");
const animalName = document.querySelector("#name");
const author = document.querySelector("#author");
const hashTag = document.querySelector("#hash-tag");

// 컨테이너
const mainContainer = document.querySelector("#mainContainer");
const integratedTab = document.querySelector("#integrated-tab");
const nameTab = document.querySelector("#name-tab");

// 네비게이션 탭 선택 전환 메서드
function toggleSelected(event){
  for(let i = 0; i < manues.length; i++){
    manues[i].classList.remove("selected-manu");
    manues[i].children[0].classList.remove("selected-title");
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
  let url = decodeURIComponent(location.search);
  let searchWord = url.slice((url.indexOf('=')+1), url.length);
  searchWord = searchWord.replace(/\+/g , ' ');
  searchBox.value = searchWord;
}

// 통합검색탭 선택 메서드
function openIntegratedTab(){
  for(let i = 0; i < manues.length; i++){
    manues[i].classList.remove("selected-manu");
    manues[i].children[0].classList.remove("selected-title");
  }
  integrated.classList.add("selected-manu");
}

// 주소탭 선택 메서드
function openAddressTab(){
  for(let i = 0; i < manues.length; i++){
    manues[i].classList.remove("selected-manu");
    manues[i].children[0].classList.remove("selected-title");

    mainContainer.children[0].classList.add("block-off");
  }
  address.classList.add("selected-manu");
  nameTab.classList.add("block-on");
}

// 동물종탭 선택 메서드
function openSpeciesTab(){
  for(let i = 0; i < manues.length; i++){
    manues[i].classList.remove("selected-manu");
    manues[i].children[0].classList.remove("selected-title");
  }
  species.classList.add("selected-manu");
}

// 동물이름탭 선택 메서드
function openNameTab(){
  for(let i = 0; i < manues.length; i++){
    manues[i].classList.remove("selected-manu");
    manues[i].children[0].classList.remove("selected-title");
  }
  animalName.classList.add("selected-manu");
}

// 작성자탭 선택 메서드
function openAuthorTab(){
  for(let i = 0; i < manues.length; i++){
    manues[i].classList.remove("selected-manu");
    manues[i].children[0].classList.remove("selected-title");
  }
  author.classList.add("selected-manu");
}

// 해시태그탭 선택 메서드
function openHashTagTab(){
  for(let i = 0; i < manues.length; i++){
    manues[i].classList.remove("selected-manu");
    manues[i].children[0].classList.remove("selected-title");
  }
  hashTag.classList.add("selected-manu");
}


getSearchWord();