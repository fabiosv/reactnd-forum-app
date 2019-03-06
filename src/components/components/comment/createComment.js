import React, {Component} from 'react'
import {string, bool, func} from 'prop-types'
import './createComment.css'

class CreateComment extends Component {
  static propTypes = {
    parentID: string.isRequired,
    activate: bool.isRequired,
    onPublish: func.isRequired,
  }

  state = {
    id: "",
    body: "",
    author: "",
    parentId: "",
    modeCreation: true,
    loading: false,
  }

  componentDidMount(){
    const { parentID } = this.props;
    this.setState((currentState) => ({
      parentId: parentID,
    }))
  }

  publish = (event) => {
    event.preventDefault()
    const { onPublish } = this.props;
    const {id, body, author, parentId } = this.state;
    onPublish(
      {
        id,
        parentId,
        timestamp: Date.now(),
        body,
        author,
      },
      this.resetFields
    )
  }

  resetFields = () => {
    this.setState((currentState) => ({
      body: "",
      author: ""
    }))
  }

  handleBody = (new_value) => {
    this.setState((currentState) => ({
      body: new_value
    }))
  }

  handleAuthor = (new_value) => {
    this.setState((currentState) => ({
      author: new_value
    }))
  }

  render(){
    const {activate} = this.props;
    const {body, author} = this.state;
    return(
      <form className={activate ? "card post shadow editCard activate" : "card post shadow editCard"}>
        <span className="col-10 focused" style={{display:"inline-block", padding: "14px 7px"}}>
          <textarea
            className="col-12"
            onChange={(event) => this.handleBody(event.target.value)}
            value={body}
            placeholder="Say something."></textarea>
          <input
            className="col-12"
            onChange={(event) => this.handleAuthor(event.target.value)}
            value={author}
            placeholder="Author" />
        </span>
        <button style={{display:"inline-block"}} onClick={(e) => this.publish(e)}>Publish</button>
      </form>
    )
  }
}

export default CreateComment