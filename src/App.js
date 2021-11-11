import "./App.css"
import Header from "./components/Header";
import FormsBox from "./components/FormsBox";
import {useState} from "react";

function App() {
    const [swap, setSwap] = useState(true)

  return (
      <div className="App">
        <div className="container">
          <Header setSwap={setSwap}/>
          <FormsBox swap={swap}/>
        </div>
      </div>
  );
}

export default App;
