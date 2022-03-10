import Btns from "./components/btns";
import Display from "./components/display";
import { React,useState } from "react";



function App() {

  const [display, setDisplay] = useState({big:"0",small:"",equal: false});


  return (
    <div id="calculator" className="container-fluid">
      <Display state={display} set={setDisplay} />
      <Btns state={display} set={setDisplay} />
    </div>
  );
}

export default App;
