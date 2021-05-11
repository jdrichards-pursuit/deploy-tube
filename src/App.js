// DEPENDENCIES
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// COMPONENTS
import About from './Pages/About'
import Home from './Pages/Home'
import Video from './Pages/Video'
import NavBar from './Components/NavBar'

import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/video/:id">
          <Video />
        </Route>
      </Switch>
    </Router>
    </div>
  )
}

export default App
