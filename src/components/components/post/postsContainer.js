import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as Alert from '../../../utils/alertController'
import PostCard from './postCard'
import {handlePostScoredUp, handlePostScoredDown, handleDeletePost} from '../../../actions/posts'
import Tools from '../commons/tools'
// import { Link } from 'react-router-dom' //for some reason, this is changing URL path but not rendering component

class PostsContainer extends Component {
  state = {
    sortByDate: false,
  }

  onScoreUp = (post_id) => {
    this.props.dispatch(handlePostScoredUp(post_id))
  }

  onScoreDown = (post_id) => {
    this.props.dispatch(handlePostScoredDown(post_id))
  }

  onDelete = (post) => {
    Alert.showConfirmAlert("You won't be able to revert this!")
    .then((result) => {
      if(result.value) {
        this.props.dispatch(handleDeletePost(
          post,
          () => { Alert.showAlert("Post Deleted!", true) }
        ))
      }
    })
  }

  alterSortType = () => {
    this.setState((currentState) => ({
      sortByDate: !currentState.sortByDate,
    }))
  }

  sort = (a,b) => {
    if (this.state.sortByDate) {
      return (b.timestamp - a.timestamp)
    } else {
      return (b.voteScore - a.voteScore)
    }
  }
  render() {
    const {posts} = this.props;
    return(
      <div id="posts" className="offset-sm-3 col-8">
        <Tools
          sortByDate={this.state.sortByDate}
          isActionLink={true}
          goTo="/post/create-update/new"
          onClickAction={() => {}}
          addTitle="Add New Post"
          alterSortType={this.alterSortType}/>
        <h4>Posts</h4>
        {posts.sort(this.sort).map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onScoreUp={this.onScoreUp}
            onScoreDown={this.onScoreDown}
            onDelete={this.onDelete}/>
        ))}
      </div>
    )
  }
}

export default connect((state) => ({
  posts: state.posts,
  selectedCategory: state.selectedCategory,
}))(PostsContainer)