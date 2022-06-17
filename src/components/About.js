import React from "react";

export default function About(props) {

  var darkModeStyle = {
    backgroundColor: props.mode==='light'?'white':'black', 
    color: props.mode==='light'?'black':'white',
    boder: props.mode==='dark' ? '2px solid white':'2px solid black'
  }

  return (
    <>
      <div className="container my-5">
          <h2>About Text Utils</h2>
          <p className="py-3">This is a free, open source text utility website, which provides various functionalities to the user.</p>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style = {darkModeStyle}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Functionalities
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style= {darkModeStyle}>
                <ul>
                  <li>Converts text to Upper Case</li>
                  <li>Converts text to Lower Case</li>
                  <li>Copies the text to the clipboard</li>
                  <li>Removes extra spaces from the text</li>
                  <li>Counts the number of words in the text</li>
                  <li>Counts the number of characters in the text</li>
                  <li>Gives an estimate time of reading the text</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
