import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { initial } from "../Reducers/Count";
import '../css/Search.css';

function Search({ onInsert, onWipe, count }) {

    const KAKAO_API_KEY = 'de874839e8c063dde99ce3682fa7685c'; //REST API Key
    const [address, setAddress] = useState("");
    const [addressList, setAddressList] = useState("");
    
    const dispatch = useDispatch();
    const onInitial = () => dispatch(initial());


    //initializing when something is in input
    const submitCheck = (e) => {
        e.preventDefault();
        onInitial();
        setAddress(e.target[0].value);
    }

    //activate API when address is modified
    useEffect(() => {
        onWipe();
        if (address !== '')
            address_search();
    }, [address, count]);

    //API fetch
    function address_search() {
        fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${address}&size=${count*10 <= 30 ? count*10 : 30}`, {
            headers: {
                Authorization: `KakaoAK ${KAKAO_API_KEY}`
            }
        })
            .then(response => response.json())
            .then(json => {
                setAddressList(json.documents);
            })
    }


    //print when fetching works
    useEffect(() => {
        if (addressList !== '') {
            sendAddress();
        }
    }, [addressList]);

    //store the state
    function sendAddress() {
        for (let i = 0; i < addressList.length; i++) {
            onInsert(addressList[i]);
        }
    }


    return (
        <div className="search">
            <form onSubmit={(event) => { submitCheck(event) }}>
                <input type="text" id="textbox" required></input>
                <button className="submit_button" type="submit">검색</button>
            </form>
        </div>
    );
}
export default Search;
