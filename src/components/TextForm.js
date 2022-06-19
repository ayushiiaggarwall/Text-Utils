import React, { useState } from "react";

export default function TextForm(props) {

  var darkModeStyle = {
    backgroundColor: props.mode==='light'?'white':'#101010', 
    color: props.mode==='light'?'black':'white'
  }
    
    const [text, setText] = useState("");

    const handleUpClick = () => {
    let uppercaseText = text.toUpperCase();
    setText(uppercaseText);
    props.showAlert('The text has been converted to Upper-Case!','success');
  };

  const handleLoClick = () => {
    let lowercaseText = text.toLowerCase();
    setText(lowercaseText);
    props.showAlert('The text has been converted to Lower-Case!','success');
  };

  const handleClearClick = () => {
    let clearText = "";
    setText(clearText);
    props.showAlert('The text has been cleared!','success');
  };

  const handleCopyClick = () => {
    let copiedText = document.getElementById('myTextBox');
    copiedText.select();
    navigator.clipboard.writeText(copiedText.value);
    props.showAlert('The text has been copied to clipboard!','success');
  };

  const handleExtraSpaces = () => {
      let spacedText = text.split(/[ ]+/);
      setText(spacedText.join(" "));
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
    props.showAlert('Extra spaces has been removed!','success');
  };

  return (
      <>
    <div className="container">
      <h2 className="my-3">{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myTextBox"
          value={text}
          style = {darkModeStyle}
          placeholder="Enter your text here..."
          onChange={handleOnChange}
          rows="9"
        ></textarea>
        <button className={`btn btn-${props.mode==='light'?'dark':'secondary'} mt-3 mx-2`} onClick={handleUpClick} disabled={text.length === 0} style = {{border : props.mode==='dark'?' 2px solid white':'2px solid black' }}>
          Convert to Uppercase
        </button>
        <button className={`btn btn-${props.mode==='light'?'dark':'secondary'} mt-3 mx-2`} onClick={handleLoClick} disabled={text.length === 0} style = {{border : props.mode==='dark'?' 2px solid white':'2px solid black' }}>
            Convert to Lowercase
        </button>
        <button className={`btn btn-${props.mode==='light'?'dark':'secondary'} mt-3 mx-2`} onClick={handleClearClick} disabled={text.length === 0} style = {{border : props.mode==='dark'?' 2px solid white':'2px solid black' }}>
            Clear Text
        </button>
        <button className={`btn btn-${props.mode==='light'?'dark':'secondary'} mt-3 mx-2`} onClick={handleCopyClick} disabled={text.length === 0} style = {{border : props.mode==='dark'?' 2px solid white':'2px solid black' }}>
            Copy Text
        </button>
        <button className={`btn btn-${props.mode==='light'?'dark':'secondary'} mt-3 mx-2`} onClick={handleExtraSpaces} disabled={text.length === 0} style = {{border : props.mode==='dark'?' 2px solid white':'2px solid black' }}>
            Remove Extra Spaces
        </button>
      </div>
    </div>

    <div className="container mt-5">
        <h3 className="my-3">Preview of input text:</h3>
        <div className="border border-secondary border-1 rounded px-2 py-2">
        <p>{text.length >0 ? text : "Nothing to Preview!"}</p>
        </div>
    </div>
    
    <div className="container my-5">
        <h3 className="my-3">Your Text Summary</h3>
        <div className="border border-secondary border-1 rounded px-2 py-2">
        <p>{text.split(" ").filter((element) => {return element.length!==0}).length} words || {text.length} characters</p>
        <p>{0.008*(text.split(" ").filter((element) => {return element.length!==0}))} minutes (Note: Assuming a reader reads 125 words in a minute)</p>
        </div>
    </div>
      </>
  );
}
