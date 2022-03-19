//the box which holds address.jsx and map.jsx inside list.jsx
import React, { useEffect } from "react";
import "../css/ListBox.css";
import Address from "./Address";
import { setLocation } from "../Reducers/Location";
import { setAddress } from "../Reducers/TargetAddress";
import { useDispatch } from "react-redux";


function ListBox({ address}) {

    const dispatch = useDispatch();
    const onLocation = address => dispatch(setLocation(address));
    const onSetAddress = address => dispatch(setAddress(address));

    function selectAddress() {
        onLocation(address);
    }

    function pushAddress() {
        onSetAddress(address);
    }
    
    
    return (
        <div className="listbox">
            <Address roadAddress={address.address} buildingName={address.buildingName}/>
            <div className="button">
                <button id="lookmap" onClick={()=>{selectAddress()}}>지도 보기</button>
                <button id="select" onClick={()=>{pushAddress()}}>선택</button>
            </div>
        </div>
    );
}
export default ListBox;