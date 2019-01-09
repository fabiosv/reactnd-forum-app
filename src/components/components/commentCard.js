import React, { Component } from 'react'
import { IoMdCreate, IoMdTrash, IoIosContact } from "react-icons/io"
import Vote from './vote'

class CommentCard extends Component {
  onScoreUp = () => {
    const comment_id = this.props.comment.id;
    this.props.onScoreUp(comment_id)
    console.log(`${comment_id}: 'upVote'`)
  }

  onScoreDown = () => {
    const comment_id = this.props.comment.id;
    this.props.onScoreDown(comment_id)
    console.log(`${comment_id}: 'downVote'`)
  }

  render(){
    const {comment} = this.props
    return(
      <div className='card post shadow'>
        <div className='tools'>
          <a id="update-post" ><IoMdCreate /></a>
          <a><IoMdTrash /></a>
        </div>
        <Vote voteScore={comment.voteScore} onScoreUp={this.onScoreUp} onScoreDown={this.onScoreDown}/>
          <span className='card-body'>
            <p className='card-text'>{comment.body}</p>
            <span>
              <p className='author'><IoIosContact /> {comment.author} <br></br> {new Date(comment.timestamp).toLocaleString()}</p>
            </span>
          </span>
      </div>
    )
  }
}

export default CommentCard;