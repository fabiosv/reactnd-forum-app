import React, { Component } from 'react'
import {connect} from 'react-redux'
import PostCard from './postCard'
import {handlePostScoredUp, handlePostScoredDown, handleDeletePost} from '../../actions/posts'
import { FaPlus, FaFilter } from "react-icons/fa"
// import { Link } from 'react-router-dom' //for some reason, this is changing URL path but not rendering component

class ListPosts extends Component {
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
    this.props.dispatch(handleDeletePost(post))
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
    const {posts, selectedCategory} = this.props;
    const filtred_posts = selectedCategory === 'all' ? posts : posts.filter((post) => post.category === selectedCategory)
    return(
      <div id='posts' className='offset-sm-3 col-8'>
        <span className='tools'>
          <a href="/post/create-update/new"
            id='add-post'
            title='Add New Post'
            alt='Button to Add New Post'><FaPlus/></a>

          <a id='filter-posts'
            title={this.state.sortByDate ? 'Sort By High Score' : 'Sort By Date'}
            onClick={(e) => this.alterSortType()}
            alt='Button to Alter Filter to Score/Date'><FaFilter/></a>
        </span>

        <h4>Posts</h4>
        {filtred_posts.sort(this.sort).map((post) => (
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
}))(ListPosts)