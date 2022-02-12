import {useSelector,useDispatch} from "react-redux";
import { newText , newColor } from "./actions";
import Author from "./components/author";
import Text from "./components/text";
import Tweet from "./components/tweet";

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

function App() {
  
  
  const dispatch = useDispatch();


  const random = Math.floor(Math.random()*cits.quotes.length);
  const randColor =Math.floor(Math.random()*colors.length);

  const text = useSelector(state=>state.quote.quote);
  const author = useSelector(state=>state.quote.author);
  const color = useSelector(state=>state.color.color);

  const body= document.querySelector("body");
  body.style.backgroundColor=color==="" ? colors[randColor] : color;

  return (
    <>
     <div id="quote-box">
      <Text default={[cits.quotes[random].quote,colors[randColor]]} reduxText={text} reduxColor={color} onChange={()=>dispatch(newColor())}/>
      <Author default={[cits.quotes[random].author,colors[randColor]]} reduxText={author} reduxColor={color}/>
      <div className="bottom">
        <Tweet default={colors[randColor] }reduxColor={color}/>
        <button id="new-quote" className="btn btn-primary" onClick={()=>dispatch(newText())} style={{backgroundColor: color==="" ? colors[randColor] : color}}>New</button>
      </div>
     </div>
    </>
  );
}

export default App;
