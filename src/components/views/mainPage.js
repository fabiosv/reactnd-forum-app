import React, { Component } from 'react'
import { connect } from 'react-redux'
import './mainPage.css'
import './posts.css'
import { IoIosArrowUp, IoIosArrowDown, IoMdCreate, IoMdTrash, IoIosContact } from "react-icons/io"
import { FaComments, FaPlus, FaRegFrownOpen, FaRegGrinHearts } from 'react-icons/fa'
import ConnectedCategories from '../components/categories'

class MainPage extends Component {
  state = {}

  onScoreUp = (post_id) => {
    console.log(`${post_id}: 'upVote'`)
  }

  onScoreDown = (post_id) => {
    console.log(`${post_id}: 'downVote'`)
  }

  render(){
    console.log(this.props);
    const {categories, posts} = this.props;
    return(
      <div>
        <div className='header'><h2>Leitura</h2></div>
        <ConnectedCategories />
        <div id='posts'>
            <div className='offset-3 col-8'>
              <h4>Posts</h4>
              {posts.map((post) => (
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
              ))}
            </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({
  categories: state.categories,
  posts: state.posts
}))(MainPage)