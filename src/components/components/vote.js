import React, { Component } from 'react'
// import {connect} from 'react-redux'
import './posts.css'
import {string, func} from 'prop-types'
import { FaRegFrownOpen, FaRegGrinHearts } from 'react-icons/fa'

function Vote (props) {
  // static propTypes = {
    // voteScore: string.isRequired,
  //   onScoreUp: func.isRequired,
  //   onScoreDown: func.isRequired,
  // }
  // removeItem = (todo) => {
  //   this.props.dispatch(handleDeleteTodo(todo))
  // }
  const {voteScore, onScoreUp, onScoreDown} = props;
  return(
    <span className='vote'>
      <a onClick={onScoreUp}><FaRegGrinHearts></FaRegGrinHearts></a>
      <p>{voteScore}</p>
      <a onClick={onScoreDown}><FaRegFrownOpen></FaRegFrownOpen></a>
    </span>
  )
}

export default Vote