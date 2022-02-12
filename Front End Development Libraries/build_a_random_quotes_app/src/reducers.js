import { combineReducers } from "redux";
import App from "./App";

const cits = require("./cits.json");
const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];


const quoteReducer = (state={quote:"",author:""},action) =>{
    switch(action.type){
        case "NEW":
            const random = Math.floor(Math.random()*cits.quotes.length);
            return {...state,
                quote: cits.quotes[random].quote,
                author: cits.quotes[random].author,
            };
        default:
            return state;
    }
}

const colorReducer = (state={color:""},action)=>{
    switch(action.type){
        case "COLOR":
            const randColor =  Math.floor(Math.random()*colors.length);
            return {...state,
                color:colors[randColor],
            }
        default:
            return state;
    }
}



const rootReducer = combineReducers({
    quote:quoteReducer,
    color:colorReducer,
});

export default rootReducer;