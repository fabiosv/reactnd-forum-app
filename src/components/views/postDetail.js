import React, { Component } from 'react'
import {connect} from 'react-redux'
import PostCard from '../components/postCard'
import CommentCard from '../components/commentCard'
import {handleReceivePostInfo} from '../../actions/posts'
import {handleFetchPostComments} from '../../actions/comments'

class PostDetail extends Component {
  state ={
    comment: ""
  }
  componentDidMount(){
    const {dispatch} = this.props
    const {id} = this.props.match.params
    dispatch(handleReceivePostInfo(id))
    dispatch(handleFetchPostComments(id))
  }
  render(){
    const {posts, comments} = this.props;
    return(
      <div>
        <div className="col-md-8 offset-md-2">
          <PostCard post={posts}/>
          <div className="col-md-10 offset-md-1">
            <textarea className="col-12" rows="4"/>
            <ul>
              {comments.map((comment) => (
                <li><CommentCard comment={comment}/></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({
  posts: state.posts,
  comments: state.comments
}))(PostDetail)