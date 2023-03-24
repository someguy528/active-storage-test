import logo from './logo.svg';
import './App.css';
import ImageUpload from './ImageUpload';
import ImageLatest from './ImageLatest';
import Image from './Image';
import {createContext , useState, useEffect} from "react";
import { useContext } from 'react';

export const AppContext = createContext(null)

function App() {
  const [first, setfirst] = useState("")
  const [latestPost, setLatestPost] = useState(AppContext)

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        <AppContext.Provider value={{latestPost, setLatestPost}}> 
            <ImageLatest />
            <ImageUpload />
        </AppContext.Provider>
        
      </header>
      
    </div>
  );
}

export default App;
