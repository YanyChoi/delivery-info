import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDetails } from "../Reducers/TargetAddress";
import "../css/FullAddress.css";
import { removeElement } from "../Reducers/TargetAddress";

//shows the currently selected address and it's detail items
function FullAddress() {

    const dispatch = useDispatch();
    const onSetDetails = details => dispatch(setDetails(details));
    const onRemoveElement = element => dispatch(removeElement(element));
    const fullAddress = useSelector(state => state.targetAddress);
    let details = {};


    function addressSubmit(event) {
        event.preventDefault();
        details = {
            blockNumber: event.target[0].value,
            shipmentMemo: event.target[1].value
        };
        onSetDetails(details);
    }

    useEffect(() => {
        //used for getting the data (the selected address) out
        if (fullAddress.address !== '없음') {
            console.log(fullAddress);
        }
    }, [details]);

    return (
        <div className="fulladdress">
            <p>주소지: {fullAddress.address}<button className="delete-button" onClick={()=>{onRemoveElement('address')}}>삭제</button></p>
            <p>건물이름: {fullAddress.buildingName}<button className="delete-button" onClick={()=>onRemoveElement('buildingName')}>삭제</button></p>
            <p>상세주소: {fullAddress.blockNumber}<button className="delete-button" onClick={()=>onRemoveElement('blockNumber')}>삭제</button></p>
            <p>배송시 유의사항: {fullAddress.shipmentMemo}<button className="delete-button" onClick={()=>onRemoveElement('shipmentMemo')}>삭제</button></p>
            <form onSubmit={(event) => { addressSubmit(event) }}>
                <input
                    type="text"
                    className="textbox"
                    id="blocknumber"
                    placeholder={fullAddress.blockNumber === '' ? "상세주소 입력" : fullAddress.blockNumber}>
                </input>
                <input
                    type="text"
                    className="textbox"
                    id="shipmentmemo"
                    placeholder={fullAddress.shipmentMemo === '' ? "배송시 유의사항" : fullAddress.shipmentMemo}></input>
                <button type="submit" id="submit_button">완료</button>
            </form>
        </div>
    );
}
export default FullAddress;