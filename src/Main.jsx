import React, { useEffect } from "react";
import Search from "./components/Search";
import List from "./components/List";
import "./css/Main.css";
import { useSelector, useDispatch } from "react-redux";
import { insert, wipe } from "./Reducers/AddressList";
import Map from "./components/Map";

function Main() {

    const count = useSelector(state => state.count.count);
    const dispatch = useDispatch();
    const onInsert = newAddress => dispatch(insert(newAddress));
    const onWipe = () => dispatch(wipe());

    return (
        <div className="main">
            <Search onInsert={onInsert} onWipe={onWipe} count={count}/>
            <Map />
            <List />
            <div className="scroll-check" ></div>
        </div>
    );
}
export default Main;