import React from "react";

class Btn extends React.Component{
    constructor(props){
        super(props);
    }

    class="btn "+this.props.className;

    render(){
        return(
            <button onClick={()=>this.props.click(this.props.value)} id={this.props.id} className={this.class} >{this.props.value}</button>
        );
    }
}

export default Btn;