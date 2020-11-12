import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// layout components
import Navbar from './components/layouts/Navbar';

// components
import Planet from './components/planets/Planet';
import Resident from './components/residents/Resident';


// pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

// State providers
import SwapiState from './context/swapi/SwapiState';

// styles
import './App.css';


const App = () => {
  return (
    <SwapiState>
      <Router>
        <Fragment>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />  
              <Route exact path="/about" component={About} />  
              <Route exact path="/planet/:planet_slug" component={Planet} />
              <Route exact path="/planet/:planet_slug/resident/:resident_slug" component={Resident} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </SwapiState>
  );
}

export default App;
