// import React from 'react'
import React, {useState} from 'react'

export default function TextInput(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase Was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
    }

    const handleReplace = ()=>{
        let replace = prompt("Which word You Want To Replace?");
        let replaceWith = prompt("Replace With?");
        let newText = text.replaceAll(replace, replaceWith);
        setText(newText)
    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        text.selectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }



    const handleOnChange = (event)=>{
        // console.log("on Change");
        setText(event.target.value);
    }
///ENTER TEXT HERE///
    const [text, setText] = useState("");

    return (
    <>
    <div className = {`container text-${props.mode==='light'?'dark':'light'}`} >
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label">
                <h1>{props.heading}</h1>
            </label>
            <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'#6c757d',color: props.mode==='light'?'black':'white'}} value = {text} onChange = {handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-success mx-2 my-1" onClick={handleUpClick}>Convert To Uppercase</button>

        <button className="btn btn-success mx-2  my-1" onClick={handleLoClick}>Convert To Lowercase</button>

        <button className="btn btn-success mx-2  my-1" onClick={handleReplace}>Replace word</button>

        <button className="btn btn-success mx-2  my-1" onClick={handleCopy}>Copy Text</button>

        <button className="btn btn-success mx-2  my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        <button className="btn btn-success mx-2  my-1" onClick={handleClearClick}>Clear Text</button>
        
        </div>
        <div className={`container text-${props.mode==='light'?'dark':'light'} my-3`}>
            <h1>Your Text Summary</h1>
            <p><b>{text.split(" ").length-1}</b> Words & <b>{text.length}</b> Characters</p>
            <p> <b>{0.008 * text.split(" ").length-0.008} <i>Minutes</i></b> to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter Something In The Box Above To Preview It Here"}</p>
        </div>
    </>
)
}