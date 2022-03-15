import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import '../css/Search.css';

function Search() {

    const KAKAO_API_KEY = 'de874839e8c063dde99ce3682fa7685c';
    let [address, setAddress] = useState("");
    let [addressList, setAddressList] = useState("");
    let searchAddress = '';
    let searchedAddersses = [];
    

    const submitCheck = (e) => {
        e.preventDefault();
        searchAddress = e.target[0].value;
        setAddress (e.target[0].value);
    }

    useEffect(() => {
        if (address !== '')
            address_search();
    },[address]);

    useEffect(() => {
        if (addressList !== ''){
            printList();
            setAddresses();
        }
    }, [addressList]);


    function address_search() {
        fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${address}`, {
            headers: {
                Authorization: `KakaoAK ${KAKAO_API_KEY}`
            }
        })
            .then(response => response.json())
            .then(json => {
                setAddressList(json.documents);
            })
    }

    function setAddresses() {
        for (let i = 0; i < Object.keys(addressList).length; i++) {
            searchedAddersses.push(`{ id: ${i+1}, road_address: ${addressList[i].road_address.address_name}, building_name: ${addressList[i].road_address.building_name}}`);
        }
        console.log(searchedAddersses);
    }

    function printList() {
        if (addressList !== undefined) {
            console.log(addressList);
            return (
              <li>{addressList}</li>
            );
        }

    }
   
    return (
        <div className="search">
            <form onSubmit={(event)=>{submitCheck(event)}}>
                <input type="text" id="textbox" required></input>
                <button className="but" type="submit"></button>
            </form>
        </div>
    );
}
export default Search;
