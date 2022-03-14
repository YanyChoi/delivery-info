import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import './Search.css';

function Search() {

    const KAKAO_API_KEY = 'de874839e8c063dde99ce3682fa7685c';
    let [address, setAddress] = useState("");
    let addressList = [];

    function submitCheck(e) {
        e.preventDefault();
        setAddress(e.target[0].value);
        address_search();
    }

    

    function address_search() {
        addressList = [];
        fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${address}`, {
            headers: {
                Authorization: `KakaoAK ${KAKAO_API_KEY}`
            }
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                const root = document.querySelector(".address");
                for (let id = 0; id < json.documents.length; id++) {
                    const addressName = json.documents[id].road_address.address_name;
                    const buildingName = json.documents[id].road_address.building_name;
                    const [locationX, locationY] = [json.documents[id].x, json.documents[id].y];
                    let element = `<li> 주소: ${addressName} 건물이름: ${buildingName} 위치: ${locationX} ${locationY} </li>`;
                    addressList.push(element)
                }
                console.log(addressList);
                
            })
    }

   

    return (
        <div className="search">
            <div className="textbox">
                <form onSubmit={(event)=>{submitCheck(event)}}>
                    <input type="text" required></input>
                    <button className="but" type="submit"></button>
                </form>
            </div>
            <div className="addressList">
                <ul className="address">{addressList}</ul>
            </div>
        </div>
    );
}
export default Search;
