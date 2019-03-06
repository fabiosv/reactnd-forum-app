import React, { Component } from 'react'
import {object, func} from 'prop-types'
import Swal from 'sweetalert2'
import { IoMdCreate, IoMdTrash, IoIosContact } from "react-icons/io"
import Vote from '../commons/vote'

class CommentCard extends Component {
  static propTypes = {
    onUpdate: func.isRequired,
    onDelete: func.isRequired,
    onScoreUp: func.isRequired,
    onScoreDown: func.isRequired,
    comment: object.isRequired,
  }

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

  onUpdate = (comment) => {
    Swal.fire({
      title: 'Update Comment',
      html:
        `<textarea id="swal-body" class="swal2-textarea" placeholder="comment">${comment.body}</textarea>`,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#D33',
      preConfirm: () => {
        return {
          timestamp: Date.now(),
          body: document.getElementById('swal-body').value
        }
      }
    }).then((result) => {
      if(result.value) {
        console.log(result.value)
        this.props.onUpdate(comment, result.value)
      }
    })
  }

  render(){
    const {comment, onDelete} = this.props
    return(
      <div className='card post shadow'>
        <div className='tools'>
          <button className="button2" onClick={(e) => this.onUpdate(comment)}><IoMdCreate /></button>
          <button className="button2" onClick={(e) => onDelete(comment)}><IoMdTrash /></button>
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