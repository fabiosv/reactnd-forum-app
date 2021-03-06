import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {handleReceivePostInfo, handleAddPost, handleUpdatePost} from '../../actions/posts'
import {handleReceiveCategories} from '../../actions/categories'
import './managePost.css'
import Loader from '../components/commons/loader'
import Header from '../components/commons/header'
import * as Alert from '../../utils/alertController'

class ManagePost extends Component {
  state = {
    posts: {
      author: "",
      body: "",
      category: "react",
      id: "",
      timestamp: Date.now(),
      title: "",
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
    if(this.props.posts.length > 0 && this.id !== 'new'){
      if(this.props.posts[0].id === this.id && this.state.posts.id !== this.id){
        let {posts} = this.props
        posts = posts[0]
        this.setState((currentState) => ({
          posts: {
            author: posts.author,
            body: posts.body,
            category: posts.category,
            id: posts.id,
            title: posts.title,
          },
          categories: [{name: posts.category}],
        }))
      }
    }
    if(typeof(this.props.categories) === 'object'){
      if(this.props.categories.length > 0 && this.state.categories.length === 0) {
        const {categories} = this.props
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
    if(this.id === 'new') {
      this.props.dispatch(handleAddPost(
        this.state.posts,
        () => {
          Alert.showAlert('Post Saved!', true)
          // this.props.history.push("/") //not working :(
          this.setState((currentState) => ({
            toHome: true,
          }))
        },
        () => { Alert.showAlert('Ops! Something went wrong, please try again', false) }
      ))
    } else {
      this.props.dispatch(handleUpdatePost(
        this.state.posts,
        () => {
          Alert.showAlert('Post Edited!', true)
          this.setState((currentState) => ({
            toHome: true,
          }))
        },
        () => {Alert.showAlert('Ops! Something went wrong, please try again', false)}
      ))
    }
  }

  render(){
    const { loading } = this.state.modeCreation ? this.state : this.props;
    const {posts, categories, toHome} = this.state;
    if(toHome) {
      return <Redirect to="/" />
    }
    return(
      <div>
        <Header title={this.state.modeCreation ? "New Post" : "Edit Post"} goBackButton={true} showIcon={false}/>
        <Loader loading={loading}/>
        <form className="offset-md-2 col-md-8">
          <input className="col-md-4 col-sm-10"
            placeholder="Author"
            disabled={!this.state.modeCreation}
            onChange={(event) => this.handleText('author', event.target.value)}
            value={posts.author} />
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
}))(ManagePost)