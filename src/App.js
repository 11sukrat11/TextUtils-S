import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';



function App(){
  const [mode, setMode] = useState('light'); //Whether dark mode enable or not
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return(
    <>
    <Navbar title="textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    
          <TextForm heading="Enter the text to analyze below" mode={mode}/>
         
    </div>
   
    </>
  );
}
export default App;