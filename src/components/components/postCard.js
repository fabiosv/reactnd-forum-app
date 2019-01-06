import React, { Component } from 'react'

class PostCard extends Component {
  onScoreUp = (post_id) => {
    console.log(`${post_id}: 'upVote'`)
  }

  onScoreDown = (post_id) => {
    console.log(`${post_id}: 'downVote'`)
  }

  render(){
    const {post} = this.props
    return(
      <div className='card post shadow' key={post.id}>
        <div className='tools'>
          <IoMdCreate></IoMdCreate>
          <IoMdTrash></IoMdTrash>
        </div>
        <span className='vote'>
          <button onClick={this.onScoreUp(post.id)}><FaRegGrinHearts></FaRegGrinHearts></button>
          <p>{post.voteScore}</p>
          <FaRegFrownOpen onClick={this.onScoreDown(post.id)}></FaRegFrownOpen>
        </span>
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