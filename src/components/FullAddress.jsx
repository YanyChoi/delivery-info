import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDetails } from "../Reducers/TargetAddress";
import "../css/FullAddress.css";

function FullAddress() {

    const dispatch = useDispatch();
    const onSetDetails = details => dispatch(setDetails(details));
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
        //동기적으로 데이터 송신, 출력 가능
        if (fullAddress.address !== '없음') {
            console.log(fullAddress);
            alert(
            `주소: ${fullAddress.address}
            건물이름: ${fullAddress.buildingName}
            상세주소: ${fullAddress.blockNumber}
            배송시 유의사항: ${fullAddress.shipmentMemo}`
            )
        }
    }, [details]);
    
    return (
        <div className="fulladdress">
            <form onSubmit={(event)=>{addressSubmit(event)}}>
                <p>주소지: {fullAddress.address}</p>
                <p>건물이름: {fullAddress.buildingName}</p>
                <input type="text" className="textbox" id="blocknumber" placeholder="상세주소 입력"></input>
                <input type="text" className="textbox" id="shipmentmemo" placeholder="배송시 유의사항"></input>
                <button type="submit" id="submit_button">완료</button>
            </form>
        </div>
    );
}
export default FullAddress;