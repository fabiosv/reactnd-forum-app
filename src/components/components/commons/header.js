import React from 'react'
import {FaBookDead, FaArrowLeft} from 'react-icons/fa'

function Header (props) {
  return(
    <div className='header'>
      {props.goBackButton && (
        <a id="goBack-button" href="/"><FaArrowLeft /></a>
      )}
      <h2>
        {props.showIcon && (<FaBookDead />)}
        &nbsp;{props.title}
      </h2>
    </div>
  )
}

export default Header