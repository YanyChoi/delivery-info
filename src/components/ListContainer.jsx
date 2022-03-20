import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ListBox from "./ListBox";

//the container which prints the whole list by mapping it out from the state

function ListContainer() {

    const addressList = useSelector(state => state.addressList.addressList);

    return addressList.map((address, index) =>
        <ListBox key={index} address={address} />
    )
}
export default ListContainer;
