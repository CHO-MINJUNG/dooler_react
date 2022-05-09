import React, {useRef, useEffect} from "react";

const MapContainer = (address) => {
  const container = useRef(null);
  const options = { //지도를 생성할 때 필요한 기본 옵션
    center: new window.kakao.maps.LatLng(37.585373, 127.031710), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
  };
  useEffect(() => {
    let map = new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    const geocoder = new window.kakao.maps.services.Geocoder();
    console.log(address.address_road)
    geocoder.addressSearch(address.address_road, function(result, status) {
    if (status === window.kakao.maps.services.Status.OK) {
      var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

      // 결과값으로 받은 위치를 마커로 표시합니다
      var marker = new window.kakao.maps.Marker({
          map: map,
          position: coords
      });
      marker.setMap(map)

      // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
      map.setCenter(coords);
      } 
    })
  }, []);

  return(
    <div  
      className="map" 
      style={{width:"100%", height: "400px"}}
      ref = {container}
      >  
    </div>
  )
}

export default MapContainer;