import React from "react";
import { useSelector } from "react-redux";

class Text extends React.Component{
    constructor(props){
        super(props);
    };

    


    render(){
        return(
            <h2 id="text" style={{color: this.props.reduxColor==="" ? this.props.default[1] : this.props.reduxText}}>{this.props.reduxText==="" ? this.props.default[0] : this.props.reduxText}</h2>
            
        )
    }
}

export default Text;