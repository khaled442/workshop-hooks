import { useState } from 'react';
import './App.css';
import Counter from './Components/counter/Counter'

function App() {
  const [isShow, setIsShow] = useState(false)
  const handleClick = ()=>{
    setIsShow (!isShow)
  } 
 
  return (
    <div className="App" style={{marginTop:"250px", textAlign:'center'}}>
      <button onClick={handleClick}>{isShow ? "hide" : "show"}  </button>
      {
        isShow ? < Counter/> : "clik again "

      }
    </div>
  );
}
export default App;
