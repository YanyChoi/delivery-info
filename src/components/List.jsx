import React, { useEffect } from "react";
import "../css/List.css";
import ListContainer from './ListContainer';
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { add } from "../Reducers/Count";

//shows list of the addresses searched by Search.jsx

function List() {

    const count = useSelector(state=>state.count.count);
    const dispatch = useDispatch();    
    const onAdd = () => dispatch(add());
    const [ref, inView] = useInView();

    useEffect( () => {
        if (inView === true && count < 4) {
            onAdd();
        }
    }, [inView])

    //checks ref to see if the browser hits the bottom and refresh it for the longer list
    return (
        <div className="list">
            <ListContainer />
            <div ref={ref}></div>
        </div>
    );
}
export default List;