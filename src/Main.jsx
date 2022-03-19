import React, { useEffect } from "react";
import Search from "./components/Search";
import List from "./components/List";
import "./css/Main.css";
import { useSelector, useDispatch } from "react-redux";
import { insert, wipe } from "./Reducers/AddressList";
import Map from "./components/Map";
import FullAddress from "./components/FullAddress";

function Main() {

    const count = useSelector(state => state.count.count);
    const dispatch = useDispatch();
    const onInsert = newAddress => dispatch(insert(newAddress));
    const onWipe = () => dispatch(wipe());

    return (
        <div className="main">
            <div className="header">
                <Search onInsert={onInsert} onWipe={onWipe} count={count}/>
                <FullAddress />
                <Map />
            </div>
            <List />
            <div className="scroll-check" ></div>
        </div>
    );
}
export default Main;