import React from "react";



class Toolbar extends React.Component{
    constructor(props){
        super(props);
    }

    
    
    render(){
        return(
            <>
                <div className="toolbar">  
                    <i className="fas fa-tools"></i>    
                    <h2>{this.props.text}</h2>                         
                </div>
            </>
        );
    }
}

export default Toolbar;