import React from 'react'
import '../post/posts.css'
import {number, func} from 'prop-types'
import { FaRegFrownOpen, FaRegGrinHearts } from 'react-icons/fa'

function Vote (props) {
  const {voteScore, onScoreUp, onScoreDown} = props;
  return(
    <span className='vote'>
      <button className="button2" onClick={onScoreUp}><FaRegGrinHearts></FaRegGrinHearts></button>
      <p>{voteScore}</p>
      <button className="button2" onClick={onScoreDown}><FaRegFrownOpen></FaRegFrownOpen></button>
    </span>
  )
}

Vote.propTypes = {
  voteScore: number.isRequired,
  onScoreUp: func.isRequired,
  onScoreDown: func.isRequired,
}

export default Vote