import logo from './logo.svg';
import './App.css';

function App() {

  function Search() {

    const KAKAO_API_KEY = '610ebac9d44f6f95e46452b625359af0';
    
    return (
        fetch("https://dapi.kakao.com/v2/local/search/address.json?query=전북 삼성동 100", {
            headers: {
                Authorization: `KakaoAK ${KAKAO_API_KEY}`
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
        })
    );
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=>{Search()}}></button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
