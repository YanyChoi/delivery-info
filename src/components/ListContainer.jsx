import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ListBox from "./ListBox";

function ListContainer() {

    const addressList = useSelector(state => state.addressList.addressList);
    const dispatch = useDispatch();

    return addressList.map((address, index) =>
        <ListBox key={index} address={address} />
    )
}
export default ListContainer;
