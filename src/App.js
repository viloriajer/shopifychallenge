
import { createContext, useState } from 'react';
import './App.css';
import { Nominations } from './components/Nominations';
import { Results } from './components/Results';
import { Search } from './components/Search';
import { MovieProvider } from './context/Context';

export const Context = createContext({})

function App() {

  const [title,setTitle] = useState("");
  const [results,setResults] = useState([]);
  const [nominees,setNominees] = useState([])
  return (
    <>
    <Context.Provider value={{

      title,setTitle,results,setResults,nominees,setNominees
    }
    }>

      <h1>The Shoppies</h1>

    <div style={{display:"flex"}}>
    <div style={{marginRight:50, marginLeft:50}}>
      <Search/>

    </div>

      {/* <Results/> */}
      <Nominations/>
    </div>
    </Context.Provider>
    </>
  );
}

export default App;
