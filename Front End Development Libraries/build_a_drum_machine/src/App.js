import Btns from "./components/btns";
import Display from "./components/display";
import "./style.css";




function App() {
  function setDisplay(text){
    const display = document.querySelector("#display");
    display.innerText=text;
 }
  return (
    <>
    <div id="drum-machine">
      <Btns res={setDisplay} />
      <div id="right">
        <Display />
      </div>
    </div>
    </>
  );
}

export default App;
