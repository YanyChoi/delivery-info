//connects to naver map api and sends location of selected element in List.jsx
import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker, loadNavermapsScript } from "react-naver-maps";
import "../css/Map.css";

function NaverMapAPI({x, y}) {

    return (
        <NaverMap
        mapDivID={'maps-getting-started-uncontrolled'}
        style={{
            width: '350px',
            height: '280px'
        }}
        defaultCenter={{lat: {x}, lng: {y}}}
        defaultZoom={13}
        >
            <Marker
            key={1}
            position={new loadNavermapsScript.LatLng(x, y)}
            animation={2}
            />
        </NaverMap>
    );
}



function Map({ x, y }) {

    const NAVER_API_ID = 'vjx3cs0ck2';

    return (
        <div className="map" id="map">
            <RenderAfterNavermapsLoaded
            ncpClientId={NAVER_API_ID}
            error={<p>Maps Load Error</p>}
            loading={<p>Maps loading...</p>}
            >
                <NaverMapAPI x={x} y={y}/>
            </RenderAfterNavermapsLoaded>
        </div>
    );
}
export default Map;