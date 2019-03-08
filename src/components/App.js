import React, { Component } from 'react'
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'
import './App.css'
import { connect } from 'react-redux'
import ConnectedMainPage from './views/mainPage'
import ConnectedManagePost from './views/managePost'
import ConnectedPostDetail from './views/postDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/post/create-update/:id' component={ConnectedManagePost}/>
            <Route exact path='/' component={ConnectedMainPage} />
            <Route exact path='/:category/:id' component={ConnectedPostDetail}/>
            <Route exact path='/:category' component={ConnectedMainPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)
