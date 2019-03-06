import React from 'react'
import {bool, string, func} from 'prop-types'
import {FaPlus, FaFilter} from 'react-icons/fa'
import '../../views/mainPage.css'

function Tools (props) {
  const { isActionLink, goTo, onClickAction, addTitle } = props;
  return(
    <span className="tools">
      {isActionLink
        ? (
          <a href={goTo}
            id="add-post-comment"
            title={addTitle}
            style={{
              paddingRight: "10px",
              color: "#343a40",
            }}
            alt={`Button to ${addTitle}`}><FaPlus/></a>
        ) : (
          <button
            onClick={(e) => onClickAction()}
            id="add-post-comment"
            title={addTitle}
            className="button1"
            style={{
              paddingRight: "10px",
              color: "#343a40",
            }}
            alt={`Button to ${addTitle}`}><FaPlus/></button>
        )
      }

      <button id="filter"
        title={props.sortByDate ? "Sort By High Score" : "Sort By Date"}
        onClick={(e) => props.alterSortType()}
        className="button1"
        alt="Button to Alter Filter to Score/Date"><FaFilter/></button>
      <p style={{display: "inline"}}>{props.sortByDate ? "By: Date" : "By: Score"}</p>
    </span>
  )
}

Tools.propTypes = {
  sortByDate: bool.isRequired,
  goTo: string.isRequired,
  isActionLink: bool.isRequired,
  addTitle: string.isRequired,
  alterSortType: func.isRequired,
  onClickAction: func.isRequired,
}

export default Tools