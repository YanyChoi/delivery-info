//connects to naver map api and sends location of selected element in List.jsx
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "../css/Map.css";

function Map() {
    const x = useSelector(state => state.location.x);
    const y = useSelector(state => state.location.y);

    const { kakao } = window;
    let options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
    };
    let markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    let marker = new kakao.maps.Marker({
        position: markerPosition
    });

    useEffect(() => {
        const container = document.querySelector(".map");
        if (x !== undefined && y !== undefined) {
            options = {
                center: new kakao.maps.LatLng(y, x),
                level: 3
            };
            let markerPosition = new kakao.maps.LatLng(y, x);
            marker = new kakao.maps.Marker({
                position: markerPosition
            });
        }
        let map = new kakao.maps.Map(container, options);
        marker.setMap(map);
    }, [x, y]);

    return (
        <div className="map" style={{ width: "300px", height: "300px", margin: "0 auto" }}>
        </div>
    );
}
export default Map;