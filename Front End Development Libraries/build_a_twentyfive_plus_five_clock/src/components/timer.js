import React from "react";

function Timer(props){

    return(
        <>
        <div id="timer">
            <h2 id="timer-label">{props.state.timerText}</h2>
            <h1 id="time-left">{props.state.min.toString().length>=2 ? props.state.min : "0"+props.state.min}:{props.state.sec.toString().length>=2 ? props.state.sec : "0"+props.state.sec}</h1>
        </div>        
        </>
    );
};

export default Timer;