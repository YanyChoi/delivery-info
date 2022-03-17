//shows list of the addresses searched by Search.jsx
import React, { useEffect } from "react";
import "../css/List.css";
import styles from "../css/List.css";
import ListContainer from './ListContainer';
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { add, subtract } from "../Reducers/Count";


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

    return (
        <div className="list">
            <ListContainer />
            <div ref={ref} style={{marginTop: "400px"}}></div>
        </div>
    );
}
export default List;