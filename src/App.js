import React,{useState} from 'react'
import Navbar from './components/Navbar.js'
import Textarea from './components/textform.js'
import Alert from './components/Alert.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About.js'

function App() {
  const [mode, setMode] = useState('light')
  const [chtext, setChText] = useState("DARK")
      const Togglemode =()=>{
      if(mode === 'light'){
        setMode ('dark');
        document.body.style.backgroundColor = 'navy';
        setChText("LIGHT");
      }
      else{
        setMode ('light');
        document.body.style.backgroundColor = 'white';
        setChText("DARK");
      }
    }
  return (
    <>
    <Router>
      <Navbar title="NAVBAR" info="About" mode={mode} togglemode={Togglemode} chtext={chtext} />
      <Alert alert="Click switch button to change LIGHT to DARK and DARK to LIGHT mode"/>
      <Routes>
         <Route path="/" element={ <div className="container" style={{ color :mode === "light"?"black":"white"}}><h3>welcome to my First project</h3> </div>}/>
         <Route path="/Texting" element={<Textarea mode={mode} heading="ENTER TEXT HERE"/>}/> 
         <Route path="/About" element={<About mode={mode}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
