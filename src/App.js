import React from 'react';
import './App.css';
import Error from './pages/Error';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        {/* exact will match the absolute path */}
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>

    </>
  );
}

export default App;
