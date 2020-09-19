import React from 'react';
import './App.css';
import Error from './pages/Error';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import { Route, Link, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
      {/* hello from app
      < Home />
      <Rooms />
      <SingleRoom />
      <Error /> */}
    </>
  );
}

export default App;
