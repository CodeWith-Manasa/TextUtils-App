import React,{useState} from 'react'
export default function TextForm(props) {
    const [text,setText]=useState("Start typing here..");
    const [btn,setbtn]=useState("Enable dark mode")
    const [mystyle,changeStyle]=useState({
      color:"black",
      backgroundColor:"white"
    })
    const StyleChange=()=>{
      if (mystyle.color==="black")
      {
        changeStyle({
          color:"white",
      backgroundColor:"black"
        })
        setbtn("Enable light mode");
      }
      else{
      
        changeStyle({
          color:"black",
      backgroundColor:"white"
        })
        setbtn("Enable dark mode");
      }

    }
    const changehandler=(e)=>{
        setText(e.target.value)
    }
    const ChangeHandle=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const ChangetoLower=()=>{
      let newText1=text.toLowerCase();
      setText(newText1);
  }
  const clearText=()=>{
    let newText1='';
    setText(newText1);
}
const Capitalize=()=>{
  let words = text.split(" ").map((element) => {
    return element.charAt(0).toUpperCase() + element.slice(1);
  });
  let newText = words.join(" ");
  setText(newText);
  }
const Savefile=()=>{
  const filename = 'test.txt';
  const aTag = document.createElement('a');

  aTag.href = text;
  aTag.download = filename;
  aTag.click();
}
const copyHandler=()=>{
  navigator.clipboard.writeText(text)
}
const spaceHandler=()=>{
  let newtext=text.split(/[ ]+/);
  setText(newtext.join(" "))
}
  return (
    <>
    <div className='container my-auto' style={mystyle}>
        <div className="mb-3 my-5" my>
        <h1>{props.heading}</h1>
        <textarea className="form-control my-3" id="exampleFormControlTextarea1" value={text} rows="8" onChange={changehandler}></textarea>
        </div>
    <button className="btn btn-primary" onClick={ChangeHandle}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={ChangetoLower}>Convert to lowercase</button>
    <button className="btn btn-primary mx-2" onClick={clearText}>clear</button>
    <button className="btn btn-primary mx-2" onClick={Capitalize}>Capitalize</button>
    <button className="btn btn-primary mx-2" onClick={Savefile}>Save file</button>
    <button className="btn btn-primary mx-2" onClick={copyHandler}>Copy text</button>
    <button className="btn btn-primary mx-2" onClick={spaceHandler}>Remove extra space</button>
    <div className="container my-10">
    <h1>Text summary</h1>
      <p> {text.split(" ").filter((element=>{return element.length!==0})).length} words and characters {text.length}</p>
      <p>{0.008*text.split(" ").length} minutes read</p>
      <h1>Preview</h1>
      <p>{text}</p> 
    </div>
    <button className="btn btn-primary mx-2 my-1" onClick={StyleChange}>{btn}</button>
    </div>
    </>
  )
}
