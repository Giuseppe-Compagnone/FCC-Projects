import React from "react";

class Author extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <h6 id="author" style={{color: this.props.reduxColor==="" ? this.props.default[1] : this.props.reduxText}}>{"-"+this.props.default[0]}</h6>
        )
    }
}

export default Author;