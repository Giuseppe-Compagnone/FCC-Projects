import React, { useState, useEffect } from "react";

function Controls(props) {
  const [inter, setInter] = useState(0);
  const [hold, setHold] = useState(false);

  useEffect(() => {
    console.log("AAAAAAAAAAAAAAAAAA", hold);
    if (hold) {
      play();
    } else {
      if (typeof inter === "undefined") {
        play();
      } else {
        pause();
      }
    }
  }, [hold]);

  const handleReset = () => {
    clearInterval(inter);
    setInter(undefined);

    props.set((s) => ({
      ...s,
      break: 5,
      session: 25,
      timerText: "Session",
      min: 25,
      sec: 0,
      play: false,
    }));

    props.state.break = 5;
    props.state.session = 25;
    props.state.timerText = "Session";
    props.state.min = 25;
    props.state.sec = 0;
    props.state.play = false;
  };

  const play = () => {
    console.log("play");
    let min = props.state.min;
    let sec = props.state.sec;

    console.log("start state: ", props.state);

    setInter(
      setInterval(() => {
        console.log("Interval. ", props.state);
        if (min <= 0 && sec <= 0) {
          pause();
        } else if (sec <= 0) {
          min -= 1;
          sec = 59;
        } else {
          sec -= 1;
        }
        props.set((s) => ({ ...s, min: min, sec: sec, play: hold }));
        props.state.min = min;
        props.state.sec = sec;
        props.state.play = hold;
        if (!props.state.play) {
          clearInterval(inter);
          setInter(undefined);
        }
        console.log("state after interval: ", props.state);
      }, 1000)
    );
  };

  const pause = () => {
    console.log("pause");

    props.set((s) => ({ ...s, play: hold }));
    clearInterval(inter);
    setInter(undefined);
    props.state.play = hold;
  };

  const handlePlayPause = () => {
    setHold((h) => !h);
    console.log("Hold: ", hold);
  };

  return (
    <>
      <div id="controls">
        {props.state.play ? (
          <i className="fa-solid fa-pause" onClick={handlePlayPause}></i>
        ) : (
          <i
            id="start_stop"
            className="fa-solid fa-play"
            onClick={handlePlayPause}
          ></i>
        )}
        <i id="reset" className="fa-solid fa-rotate" onClick={handleReset}></i>
      </div>
    </>
  );
}

export default Controls;
