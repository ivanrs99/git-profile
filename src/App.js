import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './Components/Search'
import User from './Components/User'

const App = () => {
  return (
    <div className="App d-flex">
      <Router>
        <Switch>
          <Route path="/" exact component={Search}/>
          <Route path="/user" exact component={User}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
