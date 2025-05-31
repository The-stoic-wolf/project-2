import React,{useState} from 'react'

export default function Textarea(props) {
   const [text, setText] = useState('Enter text here');   //const [state, setState] = useState(initialState)
   
   const handleOnChange =(event)=>{
    console.log("on change clicked");
    setText(event.target.value);
   }
   const handleUPclick =()=>{
    setText(text.toUpperCase());
    console.log("upper case clicked");
   }
   const handleLOWclick =()=>{
    setText(text.toLowerCase());
    console.log("LOWER case clicked");
   }
   const handleDELclick =()=>{
    setText("");
    console.log("LOWER case clicked");
   }
  //  setText("Text is here");                             //updated value of variable 'text'
  return (
    <>
    <div className="container my-3" style={{color: props.mode === 'light'?'black':'white'}}>
       <h2>{props.heading}</h2>
          <div className="mb-3"> 
            <textarea className={"form-control"} style={{backgroundColor: props.mode === 'light'?'white':'lightgrey'}} value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
          </div>
     <button disabled={text.length===0} className="btn btn-primary" onClick={handleUPclick}>UPPERCASE</button>
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLOWclick}>LOWERCASE</button>
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleDELclick}>DELETE</button>
    </div>
     <div className="container" style={{color: props.mode === 'light'?'black':'white'}}>
       <h2>Your text summary</h2>
       <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
     </div>
     </>
  )
}
