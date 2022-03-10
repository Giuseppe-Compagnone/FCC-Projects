import React from "react";
import Btn from "./btn";
import Display from "./display";

class Btns extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleEqual= this.handleEqual.bind(this);
  }

  handleClear(val) {
    this.set({ ...this.state, small: "", big: "0",equal: false});
  }

  handleNumber(val) {
    if(this.state.big==="+" || this.state.big==="-" || this.state.big==="*" || this.state.big==="/"){
      this.set({...this.state, big: val,small: this.state.small+val, equal: false})
    } else if(this.state.big==0){
      this.set({...this.state, big: val,small: this.state.small+val, equal: false})
    } else {
      if(val==="." && this.state.big.includes("."))return;
      this.set({ ...this.state, big: this.state.big+val,small: this.state.small+val, equal: false});
    };
  }

  handleOperator(val) {
    if(this.state.big==="+" || this.state.big==="-" || this.state.big==="*" || this.state.big==="/"){
      this.set({...this.state,small:this.state.small.replace(this.state.big,val),big:val});
    }else{      
      this.set({
        ...this.state,
        small: (this.state.small + val),
        big: val,
      });
    };
  }

  handleEqual(val){
    if(this.state.equal===true)return;
    this.set({big:eval(this.state.small),small:val,equal:true});
  }

  list = [
    {
      id: "clear",
      value: "AC",
      type: "clear",
      click: this.handleClear,
    },
    {
      id: "divide",
      value: "/",
      type: "operator",
      click: this.handleOperator,
    },
    {
      id: "multiply",
      value: "*",
      type: "operator",
      click: this.handleOperator,
    },
    {
      id: "seven",
      value: "7",
      type: "number",
      click: this.handleNumber,
    },
    {
      id: "eight",
      value: "8",
      type: "number",
      click: this.handleNumber,
    },
    {
      id: "nine",
      value: "9",
      type: "number",
      click: this.handleNumber,
    },
    {
      id: "subtract",
      value: "-",
      type: "operator",
      click: this.handleOperator,
    },
    {
      id: "four",
      value: "4",
      type: "number",
      click: this.handleNumber,
    },
    {
      id: "five",
      value: "5",
      type: "number",
      click: this.handleNumber,
    },
    {
      id: "six",
      value: "6",
      type: "number",
      click: this.handleNumber,
    },
    {
      id: "add",
      value: "+",
      type: "operator",
      click: this.handleOperator,
    },
    {
      id: "one",
      value: "1",
      type: "number",
      click: this.handleNumber,
    },
    {
      id: "two",
      value: "2",
      type: "number",
      click: this.handleNumber,
    },
    {
      id: "three",
      value: "3",
      type: "number",
      click: this.handleNumber,
    },
    {
      id: "zero",
      value: "0",
      type: "number",
      click: this.handleNumber,
    },
    {
      id: "decimal",
      value: ".",
      type: "number",
      click: this.handleNumber,
    },
    {
      id: "equals",
      value: "=",
      type: "equals",
      click: this.handleEqual,
    },
  ];

  handleLoad() {
    let hold = [];
    for (let i = 0; i < this.list.length; i++) {
      hold.push(
        <Btn
          click={this.list[i].click}
          key={i}
          id={this.list[i].id}
          value={this.list[i].value}
          className={this.list[i].type}
          state={this.props.state}
          set={this.props.set}
        />
      );
    }
    return hold;
  }

  render() {
    return (
      <div id="btns" className="container-fluid">
        {this.handleLoad()}
      </div>
    );
  }
}

export default Btns;
