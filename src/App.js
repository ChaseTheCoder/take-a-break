import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/take-a-break/" component={Home}/>
          <Route exact path="/take-a-break/about" component={About}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
