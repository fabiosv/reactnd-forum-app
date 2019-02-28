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
          <button className="button2" ><IoMdCreate /></button>
          <button className="button2"><IoMdTrash /></button>
        </div>
        <div style={{
            top: '10%',
            position: 'absolute',
            paddingLeft: '15px',
          }}>
          <Vote
            voteScore={comment.voteScore}
            onScoreUp={this.onScoreUp}
            onScoreDown={this.onScoreDown}
          />
        </div>
        <div className='card-body col-sm-9'>
          <p className='card-text'>{comment.body}</p>
          <span>
            <p className='author'><IoIosContact /> {comment.author} <br/> {new Date(comment.timestamp).toLocaleString()}</p>
          </span>
        </div>
      </div>
    )
  }
}

export default CommentCard;