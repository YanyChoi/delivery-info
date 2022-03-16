//the box which holds address.jsx and map.jsx inside list.jsx
import React from "react";
import "../css/ListBox.css";
import Address from "./Address";
import Map from "./Map";

function ListBox() {

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
            <Address />
            <button id="select" onClick={(event)=>{selectAddress(event)}}>선택</button>
            <Map />

        </div>
    );
}
export default ListBox;