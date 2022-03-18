//the box which holds address.jsx and map.jsx inside list.jsx
import React, { useEffect } from "react";
import "../css/ListBox.css";
import Address from "./Address";
import { set } from "../Reducers/Location";
import { useDispatch } from "react-redux";


function ListBox({ address, onRemove, onWipe, index}) {

    const dispatch = useDispatch();
    const onLocation = address => dispatch(set(address));

    function selectAddress(event) {
        event.stopPropagation();
        onLocation(address);
    }

    
    
    return (
        <div className="listbox">
            <Address roadAddress={address.address} buildingName={address.buildingName}/>
            <button id="select" onClick={(event)=>{selectAddress(event)}}>선택</button>
        </div>
    );
}
export default ListBox;