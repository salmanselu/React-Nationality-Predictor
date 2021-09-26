import {useState} from 'react';
import './App.css';

function App() {
let [isApiError, setIsApiError] = useState(false);
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
          <input type="text" className="Name-input"/>
          <button className="btn">predict</button>
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
