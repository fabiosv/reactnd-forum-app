import React, {Component} from 'react'
import Modal from 'react-modal'
import './createComment.css'

class CreateComment extends Component {
  state = {
    comment: {
      id: "",
      timestamp: Date.now(),
      body: "",
      author: "",
      parentId: "",
    },
    modeCreation: true,
    loading: false,
  }
  render(){
    const {modalIsOpen} = this.props;
    return(
      <div className="card post shadow editCard">
        <span className="col-10" style={{display:"inline-block", padding: "14px 7px"}}>
          <textarea className="col-12" placeholder="Say something."></textarea>
          <input className="col-12" placeholder="Author" />
        </span>
        <button style={{display:"inline-block"}}>Publicate</button>
      </div>
    )
  }
}

export default CreateComment