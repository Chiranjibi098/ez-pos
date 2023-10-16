import React from 'react';
import LoginForm from './LoginForm';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

function App() {
    return (
      <div className="App">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" component={LoginForm} />
        </Switch>
      </div>
    );
}
  
export default App;