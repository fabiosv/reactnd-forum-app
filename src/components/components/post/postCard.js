import React, { Component } from "react"
import { Link } from "react-router-dom"
import {object, func} from 'prop-types'
import { IoMdCreate, IoMdTrash, IoIosContact } from "react-icons/io"
import { FaComments } from "react-icons/fa"
import Vote from "../commons/vote"
class PostCard extends Component {
  static propTypes = {
    onDelete: func.isRequired,
    onScoreUp: func.isRequired,
    onScoreDown: func.isRequired,
    post: object.isRequired,
  }

  onScoreUp = () => {
    const post_id = this.props.post.id;
    this.props.onScoreUp(post_id)
    console.log(`${post_id}: "upVote"`)
  }

  onScoreDown = () => {
    const post_id = this.props.post.id;
    this.props.onScoreDown(post_id)
    console.log(`${post_id}: "downVote"`)
  }

  onDelete = () => {
    this.props.onDelete(this.props.post)
  }

  render(){
    const {post} = this.props
    return(
      <div className="card post shadow">
        <div className="tools">
          <Link id="update-post" to={`/post/create-update/${post.id}`}><IoMdCreate /></Link>
          <button className="button2" onClick={this.onDelete}><IoMdTrash /></button>
        </div>
        <Vote voteScore={post.voteScore} onScoreUp={this.onScoreUp} onScoreDown={this.onScoreDown}/>
          <span className="card-body col-sm-9">
            <h3 className="card-title">
              <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
            </h3>
            <p className="card-text">{post.body}</p>
            <span>
              <p className="author"><IoIosContact /> {post.author} <br/> {new Date(post.timestamp).toLocaleString()}</p>
              <p className="createdAt"></p>
              <p className="comments"><FaComments /> {post.commentCount}</p>
            </span>
          </span>
      </div>
    )
  }
}

export default PostCard;