import React, { Component } from 'react'
import PostCard from './postCard'

class ListPosts extends Component {
  render() {
    const {posts} = this.props
    return(
      <div>
        {posts.map((post) => (
          <PostCard/>
        ))}
      </div>
    )
  }
}

export default connect((state) => ({
  posts: state.posts
}))(ListPosts)