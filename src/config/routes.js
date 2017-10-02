import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './../containers/Home'
import AddArticle from './../components/AddArticle'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/new-article" component={AddArticle}/>
    </Switch>
  </Router>
)

export default Routes
