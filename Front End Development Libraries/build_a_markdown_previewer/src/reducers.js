import "redux";
import { combineReducers } from "redux";

function textReducer(state="",action){
    switch(action.type){
        case "CHANGED":
            const editor = document.querySelector("#editor");
            if(editor!=null)return editor.value;
            return "";            
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    text : textReducer,
});

export default rootReducer;