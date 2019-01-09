import React from 'react'
import {FaBookDead} from 'react-icons/fa'

function Header (props) {
  return(
    <div className='header'><h2><FaBookDead /> {props.title}</h2></div>
  )
}

export default Header