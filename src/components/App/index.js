import React from 'react';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Story from '../Story';
import User from '../User';
import Feed from '../Feed';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/story/:id" component={Story} />
          <Route path="/user/:id" component={User} />
          <Route path="/news/:page" component={Feed} />
          <Route path="/newest/:page" component={Feed} />
          <Route path="/show/:page" component={Feed} />
          <Route path="/ask/:page" component={Feed} />
          <Route path="/jobs/:page" component={Feed} />
          <Redirect to="/news/1" />
        </Switch>
      </main>
    </Router>
  )
}

export default App;
