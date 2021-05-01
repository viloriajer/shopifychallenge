
import { createContext } from 'react';
import './App.css';
import { Nominations } from './components/Nominations';
import { Results } from './components/Results';
import { Search } from './components/Search';

const ArrayContext = createContext({
  nominees:[]
})
function App() {
  return (
    <>
    <div>

      <h1>The Shoppies</h1>
      <Search/>
      <Results/>
      <Nominations/>
    </div>
    </>
  );
}

export default App;
