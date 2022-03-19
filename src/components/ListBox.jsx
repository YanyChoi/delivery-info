import React, { useEffect } from "react";
import "../css/ListBox.css";
import Address from "./Address";
import { setLocation } from "../Reducers/Location";
import { setAddress } from "../Reducers/TargetAddress";
import { useDispatch } from "react-redux";

//the box which holds a single address inside the list

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
                {/* buttons for 1. opening the designated location to print on map 2. selecting the address to store it*/}
                <button id="lookmap" onClick={()=>{selectAddress()}}>지도 보기</button>
                <button id="select" onClick={()=>{pushAddress()}}>선택</button>
            </div>
        </div>
    );
}
export default ListBox;