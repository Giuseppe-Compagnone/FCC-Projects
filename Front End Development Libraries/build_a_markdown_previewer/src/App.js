import { useSelector } from "react-redux";
import Editor from "./components/editor";
import Preview from "./components/preview"



function App() {

  const previewText = useSelector(state=>state.text);

  return (
    <>
      <div className="container-fluid">
        <Editor />
        <Preview text={previewText}/>
      </div>
    </>
  );
}

export default App;
