import React from 'react'
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
      <button className="button2" onClick={onScoreUp}><FaRegGrinHearts></FaRegGrinHearts></button>
      <p>{voteScore}</p>
      <button className="button2" onClick={onScoreDown}><FaRegFrownOpen></FaRegFrownOpen></button>
    </span>
  )
}

export default Vote