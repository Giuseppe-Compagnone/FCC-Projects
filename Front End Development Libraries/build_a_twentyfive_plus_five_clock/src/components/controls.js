import React from "react";

function Controls(props) {

  let interval;
  let hold = false;

  const handleReset = () => {
    if(props.state.play){
      clearInterval(interval);
    }    
    return props.set(s =>({
      ...s,
      break: 5,
      session: 25,
      timerText: "Session",
      min:25,
      sec:0,
      play: false,
    }));
  };

  const play = () => {
    console.log("play");
    let min = props.state.min;
    let sec = props.state.sec;


    interval = setInterval(() => {
      if (min <= 0 && sec <= 0) {
        pause();
      }
      else if (sec <= 0) {
        min -= 1;
        sec = 59;
      } else {
        sec -=1;
      }
      props.set(s => ({...s,min:min,sec:sec,play:hold}));
      if(!props.state.play){
        clearInterval(interval); 
      }
    }, 1000);
  };

  const pause = () => {
    console.log("pause");    
    hold=false;
    return props.set(s => ({...s,play:hold}))
  };

  const handlePlayPause = () => {

    hold = !hold;

    if (hold) {
      play();
    } else {
      pause();
    }
  };

  return (
    <>
      <div id="controls" onClick={handlePlayPause}>
        {props.state.play ? (
          <i className="fa-solid fa-pause"></i>
        ) : (
          <i id="start_stop" className="fa-solid fa-play"></i>
        )}
        <i id="reset" className="fa-solid fa-rotate" onClick={handleReset}></i>
      </div>
    </>
  );
}

export default Controls;
