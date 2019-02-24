import React, { Component } from 'react'
import { connect } from 'react-redux'
import './mainPage.css'
import { withRouter } from 'react-router-dom'
import ConnectedCategories from '../components/categories'
import ConnectedListPosts from '../components/listPosts'
import Loader from '../components/loader'
import Header from '../components/header'
import {
  handleInitialData
} from '../../actions/shared'

class MainPage extends Component {
  state = {}

  onScoreUp = (post_id) => {
    console.log(`${post_id}: 'upVote'`)
  }

  onScoreDown = (post_id) => {
    console.log(`${post_id}: 'downVote'`)
  }

  componentDidMount () {
    const { category } = this.props.match.params
    const { dispatch } = this.props
    console.log(category)
    dispatch(handleInitialData(category))
  }

  render(){
    return(
      <div>
        <Header title={"Leitura"} showIcon={true}/>
        <Loader loading={this.props.loading}/>
        <ConnectedCategories />
        <ConnectedListPosts />
      </div>
    )
  }
}

export default withRouter(connect((state) => ({
  loading: state.loading,
}))(MainPage))