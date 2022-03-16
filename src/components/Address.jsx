//shows a block of address which locates in List.jsx
import React from "react";
import "../css/Address.css";

const Address = ({roadAddress, buildingName}) => {
    return (
        <div className="address">
            <p className="textbox" id="road_address">{roadAddress}</p>
            <p className="textbox" id="building_name">{buildingName}</p>
        </div>
    );
}
export default Address;