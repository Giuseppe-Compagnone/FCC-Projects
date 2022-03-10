import React from "react";

function Controls(props){

    const handleReset = () => {
        props.set({...props.state,break:5,session:25,timerText:"Session",play:false});
    }

    const handlePlayPause = () =>{
        props.set({...props.state,play:!props.state.play})
    }

    return(
        <>
            <div id="controls" onClick={handlePlayPause}>
                {props.state.play ?  <i class="fa-solid fa-pause"></i> : <i id="start_stop" className="fa-solid fa-play"></i>}
                <i id="reset" className="fa-solid fa-rotate" onClick={handleReset}></i>
            </div>
        </>
    );
};

export default Controls;