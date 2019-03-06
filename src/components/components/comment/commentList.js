import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as Alert from '../../../utils/alertController'
import CommentCard from './commentCard'
import CreateComment from './createComment'
import {
  handleAddComment,
  handleUpdateComment,
  handleCommentScoredUp,
  handleCommentScoredDown,
  handleDeleteComment} from '../../../actions/comments'
import Tools from '../commons/tools'
// import { Link } from 'react-router-dom' //for some reason, this is changing URL path but not rendering component

class CommentList extends Component {
  state ={
    sortByDate: false,
    addCommentActive: false,
  }

  onScoreUp = (comment_id) => {
    this.props.dispatch(handleCommentScoredUp(comment_id))
  }

  onScoreDown = (comment_id) => {
    this.props.dispatch(handleCommentScoredDown(comment_id))
  }

  onDelete = (comment) => {
    Alert.showConfirmAlert("You won't be able to revert this!")
    .then((result) => {
      if(result.value) {
        this.props.dispatch(handleDeleteComment(
          comment,
          () => { Alert.showAlert("Comment Deleted!", true)},
          () => { Alert.showAlert("Error on Delete Comment, please try again later", false)}
        ))
      }
    })
  }

  onUpdate = (comment, comment_data) => {
    this.props.dispatch(handleUpdateComment(
      comment,
      comment_data,
      () => {Alert.showAlert("Comment Updated!", true)},
      () => {Alert.showAlert("Error on Update Comment, please try again later!", false)}
    ))
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

  toggleNewComment = () => {
    this.setState((currentState) => ({
      addCommentActive: !currentState.addCommentActive,
    }))
  }

  createComment = (comment, scs_callb_fnc) => {
    const {dispatch} = this.props
    dispatch(handleAddComment(
      comment,
      () => {
        Alert.showAlert("New Comment Published!", true)
        scs_callb_fnc()
        this.toggleNewComment()
      },
      () => {Alert.showAlert("Error on publish new comment, please try again", false)}
    ))
  }
  render() {
    const { addCommentActive } = this.state;
    const { comments } = this.props;
    const { parentID } = this.props;
    return(
      <div id="comments" className="col-md-10 offset-md-1">
        <Tools
          onClickAction={this.toggleNewComment}
          sortByDate={this.state.sortByDate}
          alterSortType={this.alterSortType}/>
        <h3>Comments</h3>
        <ul>
          <li>
            <CreateComment parentID={parentID} activate={addCommentActive} onPublish={this.createComment}/>
          </li>
          {comments.sort(this.sort).map((comment) => (
            <li key={comment.id}>
              <CommentCard
                onDelete={this.onDelete}
                onUpdate={this.onUpdate}
                onScoreUp={this.onScoreUp}
                onScoreDown={this.onScoreDown}
                comment={comment}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect((state, own_params) => ({
  comments: state.comments,
  parentID: own_params.parentID,
}))(CommentList)