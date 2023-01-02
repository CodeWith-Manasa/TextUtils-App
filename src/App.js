
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode,setmode]=useState('light');
  const toggle=()=>{
    if (mode==='light')
    setmode('dark')
    else
    setmode("light")
  }
  return (
    <div>
    <Navbar mode={mode} toggle={toggle}/>
    <div className="container">
      <TextForm heading="Enter a text to analyze" />
    </div>
    </div>
  );
}

export default App;
