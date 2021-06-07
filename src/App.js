import React from 'react';
import Home from './Views/Home';
import Cards from './Views/Cards';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="container my-5">
          <Switch>
            <Route path="/Cards">
                <Cards />
            </Route>
            
            <Route path="/Buttons">
              <div className="container">
                <h1>Buttons page not implemented yet!</h1>
              </div>
            </Route>

            <Route path="/Signatures">
              <div className="container">
                <h1>Signatures page not implemented Yet!</h1>
              </div>
            </Route>
            <Route path="/">
              <Home />
            </Route>
            
          </Switch>
        </div>

        <Footer />
      </Router>
      </>
  );
}

export default App;
