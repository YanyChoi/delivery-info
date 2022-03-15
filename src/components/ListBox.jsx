//the box which holds address.jsx and map.jsx inside list.jsx
import React from "react";
import "../css/ListBox.css";
import Address from "./Address";
import Map from "./Map";

function ListBox() {

    function openMap(event) {
        console.log(event);
    }

    return (
        <div className="listbox" onClick={(event)=>{openMap(event)}}>
            <Address />
            <Map />

        </div>
    );
}
export default ListBox;