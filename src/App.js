import React from 'react';
import Navbar from './components/layouts/Navbar';
import Index from './components/layouts/Index';
import Provider from './context'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
        
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index}/>
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
