import React from "react";

function Break(props){

    const handleDecrement = () =>{
        if(props.state.break<=1)return;
        props.set({...props.state,break:props.state.break-1});
    }

    const handleIncrement = () =>{
        if(props.state.break>=60)return;
        props.set({...props.state,break:props.state.break+1});
    }

    return(
        <>
        <div className="wrapper">
            <h2 id="break-label">Break Lenght</h2>
            <div className="under">
                <i id="break-increment" className="fa-solid fa-plus" onClick={handleIncrement}></i>
                <p id="break-lenght">{props.state.break}</p>
                <i id="break-decrement" className="fa-solid fa-minus" onClick={handleDecrement}></i>
            </div>
        </div>
        </>
    );
};

export default Break;