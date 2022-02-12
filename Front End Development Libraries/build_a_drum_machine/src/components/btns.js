import React from "react";
import Drumpad from "./drumpad";

class Btns extends React.Component{
    constructor(props){
        super(props);
        this.buttons=this.buttons.bind(this);
    }

    buttons(){
        const letter = ["Q","W","E","A","S","D","Z","X","C"]

        let buttons = [];
        for (let i = 0; i < letter.length; i++) {
            buttons.push(<Drumpad key={i} text={letter[i]} res={this.props.res}/>); 
        }
        return buttons;
    }

    render(){
        return(
            <div id="btns">
                {this.buttons()}
            </div>
        )
    }
}

export default Btns;