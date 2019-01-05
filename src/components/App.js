import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { connect } from 'react-redux'
import {
  handleInitialData
} from '../actions/shared'
import Demo from './views/demo'
import ConnectedMainPage from './views/mainPage'
import NewPost from './views/newPost'

class App extends Component {
  getState = () => {
    console.log(this.store.getState())
  }
  componentDidMount () {
    const { dispatch, subscribe, getState } = this.props

    dispatch(handleInitialData())
    subscribe(() => console.log(getState()))
    
  }
  // componentWillUnmount(){
  //   this.unsubscribe()
  // }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <ConnectedMainPage />
        )} />
        <Route exact path='/new-post' render={() => (
          <NewPost />
        )} />
        <Route exact path='/demo' render={() => (
          <Demo />
        )} />
      </div>
    );
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)
