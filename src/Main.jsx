import React from "react";
import Search from "./components/Search";
import List from "./components/List";
import "./css/Main.css";

function Main() {

    return (
        <div className="main">
            <Search />
            <List />
        </div>
    );
}
export default Main;