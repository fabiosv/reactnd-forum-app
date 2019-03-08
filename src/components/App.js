import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import './App.css'
import { connect } from 'react-redux'
import ConnectedMainPage from './views/mainPage'
import ConnectedManagePost from './views/managePost'
import ConnectedPostDetail from './views/postDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={withRouter(ConnectedMainPage)} />
          <Route exact path='/:category' component={ConnectedMainPage} />
          <Route exact path='/post/create-update/:id' component={ConnectedManagePost}/>
          <Route exact path='/:category/:id' component={ConnectedPostDetail}/>
        </Switch>
      </div>
    );
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)
