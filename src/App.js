import {useState} from 'react';
import './App.css';

function App() {
let [isApiError, setIsApiError] = useState(false);
let [searchText, setSearchText] = useState("");
let [apiResult, setApiResult] = useState([]);
let baseUrl = 'https://api.nationalize.io?name=';

let onSubmit = () => {
  fetch(`${baseUrl}${searchText}`)
  .then(response=>response.json())
  .then(data => console.log(data))
}

let getText = (event) => {
  setSearchText(event.target.value);
}

  return (
    <div className="App">
      <div className="Title">
            <div className="Title-image"></div>
            <div className="Title-text">
              <div>Predict</div>
              <div>Nationality</div>
            </div>
      </div>
      <div className="Changing-content">
        <div className="input-container">
          <input onChange={getText} type="text" className="Name-input" placeholder="enter a name"/>
          <button onClick={onSubmit} className="btn">predict</button>
          {
            isApiError &&
            <div className="error-container"><span className="error-message">Error! Please try again</span></div>
          }
        </div>

      </div>
    </div>
  );
}

export default App;
