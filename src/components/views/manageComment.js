import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {handleReceivePostInfo, handleAddPost, handleUpdatePost} from '../../actions/posts'
import {handleReceiveCategories} from '../../actions/categories'
import './managePost.css'
import Loader from '../components/commons/loader'
import Header from '../components/commons/header'
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

class ManageComment extends Component {
  state = {
    posts: {
      author: "",
      body: "",
      category: "",
      commentCount: 0,
      deleted: false,
      id: "",
      timestamp: Date.now(),
      title: "",
      voteScore: 0,
    },
    categories: [],
    modeCreation: true,
    loading: false,
    toHome: false,
  }

  componentDidMount() {
    const {dispatch} = this.props
    const {id} = this.props.match.params
    this.id = id
    this.setState((currentState) => ({
      modeCreation: (id === 'new'),
    }))
    if(id !== 'new') {
      dispatch(handleReceivePostInfo(id))
    } else {
      dispatch(handleReceiveCategories())
    }
  }

  componentDidUpdate(prevState, prevProps){
    if(typeof(this.props.posts.id) === 'string' && this.id !== 'new'){
      if(this.props.posts.id === this.id && this.state.posts.id !== this.id){
        const {posts} = this.props
        this.setState((currentState) => ({
          posts: {
            author: posts.author,
            body: posts.body,
            category: posts.category,
            commentCount: posts.commentCount,
            deleted: posts.deleted,
            id: posts.id,
            timestamp: posts.timestamp,
            title: posts.title,
            voteScore: posts.voteScore,
          },
          categories: [{name: posts.category}],
        }))
      }
    }
    if(typeof(this.props.categories.categories) === 'object'){
      if(this.props.categories.categories.length > 0 && this.state.categories.length === 0) {
        const {categories} = this.props.categories
        this.setState((currentState) => ({
          categories: categories,
        }))
      }
    }
  }

  handleText = (field, new_value) => {
    var new_pair_value = this.state.posts
    new_pair_value[field] = new_value
    this.setState((currentState) => ({
      posts: JSON.parse(JSON.stringify(new_pair_value))
    }))
  }

  save = (event) => {
    event.preventDefault()
    console.log('saving')
    if(this.id === 'new') {
      this.props.dispatch(handleAddPost(
        this.state.posts,
        () => {
          this.showAlert('Post Saved!', true)
          this.setState((currentState) => ({
            toHome: true
          }))
        },
        () => {this.showAlert('Ops! Something went wrong, please try again', false)}
      ))
    } else {
      this.props.dispatch(handleUpdatePost(
        this.state.posts,
        () => {this.showAlert('Post Edited!', true)},
        () => {this.showAlert('Ops! Something went wrong, please try again', false)}
      ))
    }
  }

  showAlert = (message, sucess=true) => {
    Swal.fire({
      type: sucess ? 'success' : 'error',
      text: message,
      showConfirmButton: false,
      timer: 3000
    });
  }

  render(){
    const {id} = this.props.match.params;
    const { loading } = this.state.modeCreation ? this.state : this.props;
    const {posts, categories, toHome} = this.state;
    if(toHome) {return <Redirect to="/" />}
    return(
      <div>
        <Header title={this.state.modeCreation ? "New Comment" : "Edit Comment"} goBackButton={true} />
        <p>{id}</p>
        <Loader loading={loading}/>
        <form className="offset-md-2 col-md-8">
          <input className="col-md-4 col-sm-10"
            placeholder="Author"
            disabled={!this.state.modeCreation}
            onChange={(event) => this.handleText('author', event.target.value)}
            value={posts.author} />
          {/* <input className="col-md-4 col-sm-10 offset-md-1"
            placeholder="Category"
            disabled={!this.state.modeCreation}
            onChange={(event) => this.handleText('category', event.target.value)}
            value={posts.category} /> */}
          <select className="col-md-4 col-sm-10 offset-md-1"
            placeholder="Category"
            disabled={!this.state.modeCreation}
            onChange={(event) => this.handleText('category', event.target.value)}
            value={posts.category}>
            {categories.map((category) => (
              <option key={category.name}>{category.name}</option>
            ))}
          </select>
          <input className="col-md-9 col-sm-10"
            placeholder="Title"
            onChange={(event) => this.handleText('title', event.target.value)}
            value={posts.title} />
          <textarea className="col-md-9 col-sm-10" rows="4"
            placeholder="Post Info"
            onChange={(event) => this.handleText('body', event.target.value)}
            value={posts.body}></textarea>
          <button
           className="col-md-9 button"
           disabled={this.state.posts.body.length === 0}
           onClick={(event) => this.save(event)}>Save</button>
        </form>
      </div>
    )
  }
}


export default connect((state) => ({
  posts: state.posts,
  loading: state.loading,
  categories: state.categories,
}))(ManageComment)