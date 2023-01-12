// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextInput from './components/TextInput';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');///wheather dark mode enable or not
  const [alert, setAlert] = useState(null);


  ///SET ALERT
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }
  
  
  ///DARK MODE
  const toggleMode =  ()=>{
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode Has Been Enabled", 'success');
      
      // else if(document.getElementById === 'blue'){
      //   document.body.style.backgroundColor = 'blue';
      // showAlert("Dark Mode Has Been Enabled", 'success');
      // }
      // else if(document.getElementById === 'green'){
      //   document.body.style.backgroundColor = 'green';
      // showAlert("Dark Mode Has Been Enabled", 'success');
      // }
      // setMode('dark');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled", 'success');
    }
  }
  return (
    // <>
    // <Router>
    //   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    //   <Alert alert={alert}/>
    //   <div className="container my-5">
    //     <Switch>
    //       <Route exact path="/about">
    //         <About />
    //       </Route>
          
    //       <Route exact path="/">
    //         <TextInput heading = "Enter Your Text Here To Analyse" mode={mode}/>
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    // </>
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-5">
        <Routes>
          <Route exact path="/about" element={<About/>}></Route>
          
          <Route exact path="/" element={<TextInput heading = "Enter Your Text Here To Analyse" mode={mode}/>}></Route>

        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;

