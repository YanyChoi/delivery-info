//the box which holds address.jsx and map.jsx inside list.jsx
import React from "react";
import "../css/ListBox.css";
import Address from "./Address";
import Map from "./Map";

function ListBox() {
    return (
        <div className="listbox">
            <Address />
            <Map />
            
        </div>
    );
}
export default ListBox;