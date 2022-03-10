import React from "react";

function Session(props){

    const handleDecrement = () =>{
        if(props.state.session<=1)return;
        props.set({...props.state,session:props.state.session-1});
    }

    const handleIncrement = () =>{
        if(props.state.session>=60)return;
        props.set({...props.state,session:props.state.session+1});
    }

    return(
        <>
        <div className="wrapper">
            <h2 id="session-label">Session Lenght</h2>
            <div className="under">
                <i id="session-increment" className="fa-solid fa-plus" onClick={handleIncrement}></i>
                <p id="session-lenght">{props.state.session}</p>
                <i id="session-decrement" className="fa-solid fa-minus" onClick={handleDecrement}></i>
            </div>
        </div>
        </>
    );
};

export default Session;