// 1. 기본위치를 --카카오로 -- 설정 (필수)
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
  mapOption = { 
    center: new kakao.maps.LatLng(0,0), // 지도의 중심좌표
    level: 5, // 지도의 확대 레벨 
}; 
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다



// HTML5의 geolocation으로 사용할 수 있는지 확인합니다 (내 위치를 받아오기 위함)
if (navigator.geolocation) {
// GeoLocation을 이용해서 접속 위치를 얻어옵니다
navigator.geolocation.getCurrentPosition(function(position) {
    
    var lat = position.coords.latitude, // 위도
        lon = position.coords.longitude; // 경도
    var locPosition = new kakao.maps.LatLng(lat, lon) 
    displayInfoMarker(locPosition);
  });
} 

function setAllLocation(){
  let list_lat = document.querySelector("#list-lat").innerText.split(',');
  let list_lon = document.querySelector("#list-lon").innerText.split(',');
  let locations = new Array();

  // 위도 경도 좌표리스트로 다시 저장
  for(let index = 0; index < list_lat.length; index++){
    const lat = list_lat[index];
    const lon = list_lon[index];
    locations.push(new kakao.maps.LatLng(lat, lon));
  }
  
  // 좌표 리스트에서 마커로 생성
  for(let index = 0; index < list_lat.length; index++){
    let marker = new kakao.maps.Marker({
      map: map,
      position: locations[index]
    });
  
  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);
  }
}


// 지도에 마커를 표시하는 함수입니다
function displayInfoMarker(locPosition) {
// 마커를 생성합니다.
var marker = new kakao.maps.Marker({  
    map: map, 
    position: locPosition,
}); 
  var iwContent = '<div style="padding:5px;font-size:15px;color:#fff;font-weight:bold;background-color:#C89D6C;border:1px solid #fff;border-radius:10px;"><내 위치><br>주변에서 게시물을 찾아보세요</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
  iwPosition = new kakao.maps.LatLng(locPosition); //인포윈도우 표시 위치입니다
  // 인포윈도우를 생성합니다
  var infowindow = new kakao.maps.InfoWindow({
  position : iwPosition, 
  content : iwContent 
  });
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map,marker);
// 지도 중심좌표를 접속위치로 변경합니다
map.setCenter(locPosition);      
}

setAllLocation();