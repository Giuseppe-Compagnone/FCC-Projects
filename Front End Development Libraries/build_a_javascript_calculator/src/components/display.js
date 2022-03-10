import React from "react";

class Display extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="disp" className="container-fluid">
                <p id="operation">{this.props.state.small}</p>
                <p id="display">{this.props.state.big}</p>
            </div>
        );
    }
}

export default Display;