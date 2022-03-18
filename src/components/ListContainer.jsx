import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ListBox from "./ListBox";
import { remove, wipe } from "../Reducers/AddressList";



function ListContainer() {

    const addressList = useSelector(state => state.addressList.addressList);
    const dispatch = useDispatch();

    const onRemove = id => dispatch(remove(id));
    const onWipe = () => dispatch(wipe());
    return addressList.map((address, index) =>
        <ListBox key={index} address={address} onRemove={onRemove} onWipe={onWipe} index={index}/>
    )
}
export default ListContainer;
