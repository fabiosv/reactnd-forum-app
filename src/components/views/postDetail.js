import React, { Component } from 'react'
import {connect} from 'react-redux'
import PostCard from '../components/postCard'

class PostDetail extends Component {
  render(){
    return(
      <div>
        <PostCard />
      </div>
    )
  }
}

export default connect((state) => ({
  posts: state.posts
}))(PostDetail)