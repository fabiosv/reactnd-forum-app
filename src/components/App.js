import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { connect } from 'react-redux'
import Demo from './views/demo'
import ConnectedMainPage from './views/mainPage'
import ConnectedManagePost from './views/managePost'
import ConnectedPostDetail from './views/postDetail'

class App extends Component {
  getState = () => {
    console.log(this.store.getState())
  }
  // componentWillUnmount(){
  //   this.unsubscribe()
  // }

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={ConnectedMainPage} />
        <Route exact path='/:category' component={ConnectedMainPage} />
        <Route path='/post/create-update/:id' component={ConnectedManagePost}/>
        <Route path='/post/detail/:id' component={ConnectedPostDetail}/>
        <Route path='/demo' component={Demo} />
      </div>
    );
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)
