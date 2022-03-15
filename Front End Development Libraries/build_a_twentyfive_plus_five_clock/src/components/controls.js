import React from "react";

function Controls(props) {
  const handleReset = () => {
    props.set({
      ...props.state,
      break: 5,
      session: 25,
      timerText: "Session",
      play: false,
    });
    clearInterval(interval);
    console.log("pulvi");
  };

  let interval;

  const play = () => {
    console.log("play");
    props.set({ ...props.state, play: true });
    interval = setInterval(() => {
      console.log("Acchiappa", props.state);
      if (props.state.min <= 0 && props.state.sec <= 0) {
        console.log("C1");
        pause();
      }
      if (props.state.sec <= 0) {
        console.log("C2");
        props.set(s => ({
          ...s,
          min: s.min - 1,
          sec: 59,
          play: true,
        }));
      } else {
        console.log("C3");
        props.set({ ...props.state, sec: props.state.sec - 1, play: true });
      }
    }, 1000);
  };

  const pause = () => {
    console.log("pause");
    props.set({ ...props.state, play: false });
    clearInterval(interval);
  };

  const handlePlayPause = () => {
    console.log(props.state);
    if (!props.state.play) {
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
