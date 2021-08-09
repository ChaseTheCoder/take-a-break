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
        <seperator />
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
