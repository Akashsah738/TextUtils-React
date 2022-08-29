import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () =>{
   // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = () =>{
    // console.log("Uppercase was clicked" + text);
     let newText = text.toLowerCase();
     setText(newText);
   }
   const handleClearClick = () =>{
    // console.log("Uppercase was clicked" + text);
     let newText = "";
     setText(newText);
   }
  const handleOnChange = (event) =>{
   // console.log("On Changess");
    setText(event.target.value);
  }
  const handleCopy =() =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }


  const [text, setText] = useState('');
  //text = "new text";//wrong way to change the state
  //setText("new text");//correct way to change the state
  return (
    <>
    <div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading} </h1>
    <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'dark':'light'}} id="myBox" rows="8"></textarea>
     </div>
     <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To uppercase</button>
     <button className="btn btn-primary mx-2 my-3" onClick={handleLoClick}>Convert To Lowercase</button>
     <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
     <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
     <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  </div>
  </div>
  <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  </>
  )
}
