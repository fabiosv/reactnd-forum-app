import React, { Component } from 'react'
import { connect } from 'react-redux'
import './mainPage.css'
import { withRouter } from 'react-router-dom'
import ConnectedCategories from '../components/categories/categories'
import ConnectedPostsContainer from '../components/post/postsContainer'
import Loader from '../components/commons/loader'
import Header from '../components/commons/header'
import {
  handleInitialData
} from '../../actions/shared'

class MainPage extends Component {
  state = {}

  componentDidMount () {
    const { category } = this.props.match.params
    const { dispatch } = this.props
    console.log(category)
    dispatch(handleInitialData(category))
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.category !== prevProps.match.params.category) {
      const { category } = this.props.match.params
      const { dispatch } = this.props
      dispatch(handleInitialData(category))
    }
  }

  render(){
    return(
      <div>
        <Header title={"Readable"} showIcon={true} goBackButton={false}/>
        <Loader loading={this.props.loading}/>
        <ConnectedCategories />
        <ConnectedPostsContainer />
      </div>
    )
  }
}

// export default connect((state) => ({
//   loading: state.loading,
// }))(MainPage)

export default withRouter(connect((state) => ({
  loading: state.loading,
}))(MainPage))