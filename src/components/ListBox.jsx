//the box which holds address.jsx and map.jsx inside list.jsx
import React, { useEffect } from "react";
import "../css/ListBox.css";
import Address from "./Address";
import Map from "./Map";


function ListBox({ address, onRemove, onWipe}) {

    function openMap(event) {
        if (event.currentTarget.style.height !== "400px"){
            event.currentTarget.style.height = "400px";
        }
        else {
            event.currentTarget.style.height = "100px";
        }
    }

    function selectAddress(event) {
        event.stopPropagation();

    }

    
    
    return (
        <div className="listbox" onClick={(event)=>{openMap(event)}}>
            <Address roadAddress={address.address} buildingName={address.buildingName}/>
            <button id="select" onClick={(event)=>{selectAddress(event)}}>선택</button>
            <Map x={address.coordX} y={address.coordY}/>

        </div>
    );
}
export default ListBox;