import React, { Component } from 'react'
import { IoMdCreate, IoMdTrash, IoIosContact } from "react-icons/io"
import { FaComments, FaRegFrownOpen, FaRegGrinHearts } from 'react-icons/fa'
import Vote from './vote'
class PostCard extends Component {
  onScoreUp = () => {
    const post_id = this.props.post.id;
    this.props.onVote(post_id, 'upVote')
    this.props.onScoreUp(post_id)
    console.log(`${post_id}: 'upVote'`)
  }

  onScoreDown = () => {
    const post_id = this.props.post.id;
    this.props.onVote(post_id, 'downVote')
    this.props.onScoreDown(post_id)
    console.log(`${post_id}: 'downVote'`)
  }

  render(){
    const {post} = this.props
    return(
      <div className='card post shadow'>
        <div className='tools'>
          <IoMdCreate></IoMdCreate>
          <IoMdTrash></IoMdTrash>
        </div>
        <Vote voteScore={post.voteScore} onScoreUp={this.onScoreUp} onScoreDown={this.onScoreDown}/>
          <span className='card-body'>
            <h3 className='card-title'><a href="#">{post.title}</a></h3>
            <p className='card-text'>{post.body}</p>
            <span>
              <p className='author'><IoIosContact></IoIosContact> {post.author} <br></br> {new Date(post.timestamp).toLocaleString()}</p>
              <p className='createdAt'></p>
              <p className='comments'><FaComments></FaComments> {post.commentCount}</p>
            </span>
          </span>
      </div>
    )
  }
}

export default PostCard;