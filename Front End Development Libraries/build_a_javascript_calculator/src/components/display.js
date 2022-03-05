import React from "react";

class Display extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="display" className="container-fluid">
                <p id="operation">{this.props.state.small}</p>
                <p id="result">{this.props.state.big}</p>
            </div>
        );
    }
}

export default Display;