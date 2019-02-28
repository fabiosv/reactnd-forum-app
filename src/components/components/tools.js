import React from 'react'
import {FaPlus, FaFilter} from 'react-icons/fa'
import '../views/mainPage.css'

function Tools (props) {
  const { goTo } = props;
  // "/post/create-update/new"
  return(
    <span className='tools'>
      <a href="/post/create-update/new"
      // href={goTo}
        id='add-post-comment'
        title='Add New Post'
        style={{
          paddingRight: '10px',
          color: '#343a40',
        }}
        alt='Button to Add New Post'><FaPlus/></a>

      <button id='filter'
        title={props.sortByDate ? 'Sort By High Score' : 'Sort By Date'}
        onClick={(e) => props.alterSortType()}
        className="button1"
        alt='Button to Alter Filter to Score/Date'><FaFilter/></button>
      {/*<p>{props.sortByDate ? 'Sort By: Date' : 'Sort By: High Score'}</p>*/}
    </span>
  )
}

export default Tools