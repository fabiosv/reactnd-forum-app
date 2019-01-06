import React, { Component } from 'react'
import {connect} from 'react-redux'
import PostCard from './postCard'
import {voteOnPost, postScoredUp, postScoredDown} from '../../actions/posts'

class ListPosts extends Component {
  state = {
    sortByDate: false,
  }
  onVote = (post_id, vote) => {
    this.props.dispatch(voteOnPost(post_id, vote))
  }

  onScoreUp = (post_id) => {
    this.props.dispatch(postScoredUp(post_id))
  }

  onScoreDown = (post_id) => {
    this.props.dispatch(postScoredDown(post_id))
  }

  sort = (a,b) => {
    if (this.state.sortByDate) {
      return (b.timestamp - a.timestamp)
    } else {
      return (b.voteScore - a.voteScore)
    }
  }
  render() {
    const {posts} = this.props
    return(
      <div id='posts' className='offset-3 col-8'>
        <h4>Posts</h4>
        {posts.sort(this.sort).map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onVote={this.onVote}
            onScoreUp={this.onScoreUp}
            onScoreDown={this.onScoreDown}/>
        ))}
      </div>
    )
  }
}

export default connect((state) => ({
  posts: state.posts
}))(ListPosts)