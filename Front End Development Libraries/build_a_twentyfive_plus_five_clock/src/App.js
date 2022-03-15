import Break from "./components/break";
import Controls from "./components/controls";
import Session from "./components/session";
import Timer from "./components/timer";
import {useState} from "react";

function App() {

  const [timer, setTimer] = useState({break:5,session:25,timerText:"Session",play:false,min:25,sec:0});

  return (
    <>
      <div className="container">
        <Break state={timer} set={setTimer} />
          <div className="wrapper">
            <Timer state={timer} set={setTimer} />
            <Controls state={timer} set={setTimer} />
          </div>
        <Session state={timer} set={setTimer} />
      </div>
    </>
  );
}

export default App;
