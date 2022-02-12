import React from "react";

class Tweet extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <a href="twitter.com/intent/tweet" id="tweet-quote" style={{color: this.props.reduxColor==="" ? this.props.default : this.props.reduxText}}><i className="fab fa-twitter-square" ></i></a>
        )
    }
}

export default Tweet;