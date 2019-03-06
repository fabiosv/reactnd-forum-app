import React from 'react'
import {FaPlus, FaFilter} from 'react-icons/fa'
import '../../views/mainPage.css'

function Tools (props) {
  const { goTo, onClickAction, addTitle } = props;
  // "/post/create-update/new"
  return(
    <span className="tools">
      {typeof(goTo) === "undefined"
        ? (
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
        ) : (
          <a href={goTo}
            id="add-post-comment"
            title={addTitle}
            style={{
              paddingRight: "10px",
              color: "#343a40",
            }}
            alt={`Button to ${addTitle}`}><FaPlus/></a>
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

export default Tools