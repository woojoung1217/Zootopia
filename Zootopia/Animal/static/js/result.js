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
const speciesTab = document.querySelector("#species-tab");
const addressTab = document.querySelector("#address-tab");
const authorTab = document.querySelector("#author-tab");
const hashTagTab = document.querySelector("#hash-tag-tab");

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
    manues[i].classList.remove("selected-manu");  // bottom-border 지우기
    manues[i].children[0].classList.remove("selected-title"); // title 색, bold 지우기

    if(!mainContainer.children[i].classList.contains("block-off")){// display-none이 없으면(보이면)
      mainContainer.children[i].classList.add("block-off");
    }
  }
  integrated.classList.add("selected-manu");
  integrated.children[0].classList.add("selected-title");
  if(integratedTab.classList.contains('block-off')){  //안보이는 상태면
    integratedTab.classList.remove("block-off");  // 보이게해라
  }
}

// 동물이름탭 선택 메서드
function openNameTab(){
  for(let i = 0; i < manues.length; i++){
    manues[i].classList.remove("selected-manu");   // bottom-border 지우기
    manues[i].children[0].classList.remove("selected-title"); // title 색, bold 지우기

    if(!mainContainer.children[i].classList.contains("block-off")){// display-none이 없으면(보이면)
      mainContainer.children[i].classList.add("block-off");
    }
  }
  animalName.classList.add("selected-manu");
  animalName.children[0].classList.add("selected-title");
  if(nameTab.classList.contains('block-off')){  //안보이는 상태면
    nameTab.classList.remove("block-off");  // 보이게해라
  }
}

// 동물종탭 선택 메서드
function openSpeciesTab(){
  for(let i = 0; i < manues.length; i++){
    manues[i].classList.remove("selected-manu");   // bottom-border 지우기
    manues[i].children[0].classList.remove("selected-title"); // title 색, bold 지우기

    if(!mainContainer.children[i].classList.contains("block-off")){// display-none이 없으면(보이면)
      mainContainer.children[i].classList.add("block-off");
    }
  }
  species.classList.add("selected-manu");
  species.children[0].classList.add("selected-title");
  if(speciesTab.classList.contains('block-off')){  //안보이는 상태면
    speciesTab.classList.remove("block-off");  // 보이게해라
  }
}

// 주소탭 선택 메서드
function openAddressTab(){
  for(let i = 0; i < manues.length; i++){
    manues[i].classList.remove("selected-manu");   // bottom-border 지우기
    manues[i].children[0].classList.remove("selected-title"); // title 색, bold 지우기

    if(!mainContainer.children[i].classList.contains("block-off")){// display-none이 없으면(보이면)
      mainContainer.children[i].classList.add("block-off");
    }
  }
  address.classList.add("selected-manu");
  address.children[0].classList.add("selected-title");
  if(addressTab.classList.contains('block-off')){  //안보이는 상태면
    addressTab.classList.remove("block-off");  // 보이게해라
  }
}

// 작성자탭 선택 메서드
function openAuthorTab(){
  for(let i = 0; i < manues.length; i++){
    manues[i].classList.remove("selected-manu");   // bottom-border 지우기
    manues[i].children[0].classList.remove("selected-title"); // title 색, bold 지우기

    if(!mainContainer.children[i].classList.contains("block-off")){// display-none이 없으면(보이면)
      mainContainer.children[i].classList.add("block-off");
    }
  }
  author.classList.add("selected-manu");
  author.children[0].classList.add("selected-title");
  if(authorTab.classList.contains('block-off')){  //안보이는 상태면
    authorTab.classList.remove("block-off");  // 보이게해라
  }
}

// 해시태그탭 선택 메서드
function openHashTagTab(){
  for(let i = 0; i < manues.length; i++){
    manues[i].classList.remove("selected-manu");   // bottom-border 지우기
    manues[i].children[0].classList.remove("selected-title"); // title 색, bold 지우기

    if(!mainContainer.children[i].classList.contains("block-off")){// display-none이 없으면(보이면)
      mainContainer.children[i].classList.add("block-off");
    }
  }
  hashTag.classList.add("selected-manu");
  hashTag.children[0].classList.add("selected-title");
  if(hashTagTab.classList.contains('block-off')){  //안보이는 상태면
    hashTagTab.classList.remove("block-off");  // 보이게해라
  }
}


getSearchWord();