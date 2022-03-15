//shows a block of address which locates in List.jsx
import React from "react";
import "../css/Address.css";

function Address() {
    let address;
    return (
        <div className="address">
            <p className="textbox" id="road_address">경기도 용인시 기흥구 동백2로 37</p>
            <p className="textbox" id="building_name">어은목마을대원칸타빌</p>
        </div>
    );
}
export default Address;