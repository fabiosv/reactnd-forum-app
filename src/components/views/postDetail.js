import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import PostCard from '../components/postCard'
import CommentCard from '../components/commentCard'
import {handleReceivePostInfo} from '../../actions/posts'
import {handleFetchPostComments} from '../../actions/comments'
import Header from '../components/header'
import Tools from '../components/tools'
import Loader from '../components/loader'
import CreateComment from '../components/comment/createComment'


class PostDetail extends Component {
  state ={
    comment: "",
    sortByDate: false,
    modalIsOpen: false,
  }

  componentDidMount(){
    const {dispatch} = this.props
    const {id} = this.props.match.params
    dispatch(handleReceivePostInfo(id))
    dispatch(handleFetchPostComments(id))
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

  render(){
    const { posts, comments, loading } = this.props;
    const { category } = this.props.match.params;
    return(
      <div>
        <Header title={"Post Details"} goBackButton={true} />
        <Loader loading={loading}/>
        {posts.category !== category && !loading
          ? (
            <div>404 Post Not Found :(</div>
          )
          : (<div className="col-md-8 offset-md-2">
            <PostCard post={posts}/>
            <div id="comments" className="col-md-10 offset-md-1">
              <Tools sortByDate={this.state.sortByDate} alterSortType={this.alterSortType}/>
              <h3>Comments</h3>
              <ul>
                <li><CreateComment/></li>
                {comments.sort(this.sort).map((comment) => (
                  <li key={comment.id}><CommentCard comment={comment}/></li>
                ))}
              </ul>
            </div>
          </div>)
        }
      </div>
    )
  }
}

export default withRouter(connect((state) => ({
  posts: state.posts,
  loading: state.loading,
  comments: state.comments
}))(PostDetail))