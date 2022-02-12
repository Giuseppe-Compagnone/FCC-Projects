import React from "react";

class Drumpad extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.handleLoad=this.handleLoad.bind(this);
        this.handleKey=this.handleKey.bind(this);
    }

    info = {
        Q:["https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3","Heater 1"],
        W:["https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3","Heater 2"],
        E:["https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3","Heater 3"],
        A:["https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3","Heater 4"],
        S:["https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3","Clap"],
        D:["https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3","Open HH"],
        Z:["https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3","Kick n' Hat"],
        X:["https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3","Kick"],
        C:["https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3","Closed HH"],
    };

    handleClick(){
        const sound = document.getElementById(this.props.text);
        this.props.res(this.info[this.props.text][1]);
        sound.play();
    }

    handleLoad(){
        document.addEventListener("keydown",this.handleKey);
    }

    handleKey(e){
        if(e.key.toUpperCase()===this.props.text){
            this.handleClick();
        }
    }



    render(){
        return(
            <>  
                <button id={this.info[this.props.text][1]} className="drum-pad" onClick={this.handleClick} onLoad={setTimeout(()=>{this.handleLoad()},200)}>{this.props.text}
                <audio id={this.props.text} className="clip" src={this.info[this.props.text][0]}>
                </audio>
                </button>                
            </>
        )
    }
}

export default Drumpad;