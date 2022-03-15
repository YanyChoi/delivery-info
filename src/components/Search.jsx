import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import '../css/Search.css';

function Search() {

    const newAddressList = useSelector( (state) => state);

    const KAKAO_API_KEY = 'de874839e8c063dde99ce3682fa7685c';
    let [address, setAddress] = useState("");
    let [addressList, setAddressList] = useState("");
    let searchAddress = '';
    

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
                <button className="submit_button" type="submit"></button>
            </form>
        </div>
    );
}
export default Search;
