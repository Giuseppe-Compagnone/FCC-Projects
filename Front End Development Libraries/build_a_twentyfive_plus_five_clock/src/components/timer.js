import React from "react";

function Timer(props){

    return(
        <>
        <div id="timer">
            <h2 id="timer-label">{props.state.timerText}</h2>
            <h1 id="time-left">{props.state.session}:00</h1>
        </div>        
        </>
    );
};

export default Timer;