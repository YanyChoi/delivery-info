import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { initial } from "../Reducers/Count";
import '../css/Search.css';

function Search({ onInsert, onWipe, count }) {

    const KAKAO_API_KEY = 'de874839e8c063dde99ce3682fa7685c';
    const [address, setAddress] = useState("");
    const [addressList, setAddressList] = useState("");
    
    const dispatch = useDispatch();
    const onInitial = () => dispatch(initial());


    //입력받을때
    const submitCheck = (e) => {
        e.preventDefault();
        onInitial();
        setAddress(e.target[0].value);
    }

    //address 바뀌고 API로 넘김
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


    //API에서 데이터가 넘어오면 출력
    useEffect(() => {
        if (addressList !== '') {
            sendAddress();
        }
    }, [addressList]);

    //store로 데이터 저장
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
