import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/home";
import Detail from "./components/detail";
import Discover from "./components/discover";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";

function App() {
  return (
    <Router>
      <footer>
        <nav>
          <ul>
            <li>
              <Link to='/'> <FaHome/> </Link>
            </li>
            <li>
              <Link to='/detail'> <FaSearch/> </Link>
            </li>
            <li>
              <Link to='/discover'> <FaUser/> </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/discover'>
            <Discover />
          </Route>
          <Route path='/detail'>
            <Detail />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </footer>
    </Router>
  );
}

export default App;
