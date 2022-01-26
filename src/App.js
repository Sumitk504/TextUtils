import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#4c84d7';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Router>

        <Navbar title="Textut" mode={mode} toggleMode={toggleMode} />

        <div className="container my-3">
            <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <Textform heading="Enter the text to analyze" mode={mode} />
              </Route>
              <Link></Link>
            </Switch>
              <Textform heading="Enter the text to analyze" mode={mode} />

        </div>

      </Router>
    </>
  );
}

export default App;
