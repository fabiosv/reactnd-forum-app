import React, { Component } from 'react'
// import {connect} from 'react-redux'
import './posts.css'
import {string, func} from 'prop-types'
import { FaRegFrownOpen, FaRegGrinHearts } from 'react-icons/fa'

class Vote extends Component {
  static propTypes = {
    voteScore: string.isRequired,
    onScoreUp: func.isRequired,
    onScoreDown: func.isRequired,
  }
  // removeItem = (todo) => {
  //   this.props.dispatch(handleDeleteTodo(todo))
  // }

  render(){
    const {voteScore, onScoreUp, onScoreDown} = this.props;
    return(
      <span className='vote'>
        <FaRegGrinHearts></FaRegGrinHearts>
        <p>{voteScore}</p>
        <FaRegFrownOpen></FaRegFrownOpen>
      </span>
    )
  }
}

export default Vote