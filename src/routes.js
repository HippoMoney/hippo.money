import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Tokens from './tokens/Tokens';

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/reviews" component={Tokens} />
    </div>
  </Router>
);
export default Root;
