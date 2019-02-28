import React, { Component } from 'react'
import { IoMdCreate, IoMdTrash, IoIosContact } from "react-icons/io"
import { FaComments } from 'react-icons/fa'
import Swal from 'sweetalert2'
import Vote from './vote'
class PostCard extends Component {
  onScoreUp = () => {
    const post_id = this.props.post.id;
    this.props.onScoreUp(post_id)
    console.log(`${post_id}: 'upVote'`)
  }

  onScoreDown = () => {
    const post_id = this.props.post.id;
    this.props.onScoreDown(post_id)
    console.log(`${post_id}: 'downVote'`)
  }

  onDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.props.onDelete(this.props.post)
      }
    })
  }

  render(){
    const {post} = this.props
    return(
      <div className='card post shadow'>
        <div className='tools'>
          <a id="update-post" href={`/post/create-update/${post.id}`}><IoMdCreate /></a>
          <button className="button2" onClick={this.onDelete}><IoMdTrash /></button>
        </div>
        <Vote voteScore={post.voteScore} onScoreUp={this.onScoreUp} onScoreDown={this.onScoreDown}/>
          <span className='card-body col-sm-9'>
            <h3 className='card-title'><a href={`/${post.category}/${post.id}`}>{post.title}</a></h3>
            <p className='card-text'>{post.body}</p>
            <span>
              <p className='author'><IoIosContact /> {post.author} <br/> {new Date(post.timestamp).toLocaleString()}</p>
              <p className='createdAt'></p>
              <p className='comments'><FaComments /> {post.commentCount}</p>
            </span>
          </span>
      </div>
    )
  }
}

export default PostCard;