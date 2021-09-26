import {useState} from 'react';
import './App.css';
import Country from './components/Country'
function App() {
let [isApiError, setIsApiError] = useState(false);
let [searchText, setSearchText] = useState("");
let [apiResult, setApiResult] = useState(null);
let baseUrl = 'https://api.nationalize.io?name=';

let onSubmit = () => {
  if(searchText !== "")
    fetch(`${baseUrl}${searchText}`)
    .then(response=>response.json())
    .then(data => setApiResult(data));

  else
    setIsApiError(true);
  console.log(apiResult);
}

let getText = (event) => {
  setSearchText(event.target.value);
}



  return (
    <div className="App">
      <div className="Title">
            <div className="title-image"></div>
            <div className="title-text">
              <div>Predict</div>
              <div>Nationality</div>
            </div>
      </div>
      <div className="Changing-content">
        { 
        apiResult === null &&
        <div className="input-container">
          <input onChange={getText} type="text" className="Name-input" placeholder="enter a name"/>
          <button onClick={onSubmit} className="btn">predict</button>
          {
            isApiError &&
            <div className="error-container"><span className="error-message">Error! Please try again</span></div>
          }
        </div>
        }
        {
        apiResult !== null &&  
        <div className="result-container">
          <div className="result-title">Results</div>
          {
            apiResult.country.map(place => {return <Country countryId={place.country_id} percent={place.probability}/>})
            
          }
        </div>
       }
      </div>
    </div>
  );
}

export default App;
