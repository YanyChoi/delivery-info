//shows list of the addresses searched by Search.jsx
import React from "react";
import { useSelector } from "react-redux";
import "../css/List.css";
import ListBox from "./ListBox";

function List() {
    return (
        <div className="list">
            <ListBox />
            <ListBox />
            <ListBox />
        </div>
    );
}
export default List;