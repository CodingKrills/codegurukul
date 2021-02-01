import React from "react";
import './index.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home } from "./pages/Home";
import { AdminHome } from "./pages/AdminHome";
import { Header } from './components/Header'

export default function App() {

  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={AdminHome} />
        </Switch>
      </Router>
    </>
  );
}