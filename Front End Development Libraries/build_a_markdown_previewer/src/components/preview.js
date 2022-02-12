import React from "react";
import Toolbar from "./toolbar";
import { marked } from "marked";

marked.setOptions({
    breaks:true,
  });
  
  const renderer = new marked.Renderer();

class Preview extends React.Component{
    constructor(props){
        super(props);
        this.mark=this.mark.bind(this);
    }
    

    mark(text){
        return {__html: marked(text, { renderer: renderer })};
    }

    render(){
        return(
            <>
                <div id="preview-block">
                    <Toolbar text="Preview"/>
                    <div id="preview" dangerouslySetInnerHTML={this.mark(this.props.text)}>
                                             
                    </div>
                </div>
                
            </>
        );
    }
}

export default Preview;