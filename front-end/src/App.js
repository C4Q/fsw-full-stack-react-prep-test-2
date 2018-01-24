import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <nav>
      <Link to="/allcandy">ALL CANDY</Link>{" "}
      <Link to="/newcandy">NEW CANDY</Link>
      </nav>
      <Switch>
      </Switch>
      </div>
    );
  }
}

export default App;
