// DEPENDENCIES
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { Component } from 'react'

// COMPONENTS
import About from './Pages/About'
import Home from './Pages/Home'
import Video from './Pages/Video'
import NavBar from './Components/NavBar'

import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
  }

  addComment = (obj) => {
    const updateComments = [...this.state.comments, obj]
    this.setState({comments: updateComments})
  }

  render () {
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
            <Video comments={this.state.comments} addComment={this.addComment}/>
          </Route>
        </Switch>
      </Router>
      </div>
    )
  }
}

export default App
