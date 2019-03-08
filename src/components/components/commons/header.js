import React, { Component } from "react"
import {bool} from "prop-types"
import { withRouter } from "react-router-dom"
import {FaBookDead, FaArrowLeft} from "react-icons/fa"

class Header extends Component {
  static propTypes = {
    showIcon: bool.isRequired,
    goBackButton: bool.isRequired,
  }
  goBack = () => {
    this.props.history.goBack();
  }
  render(){
    const { goBackButton, showIcon, title } = this.props
    return(
      <div className="header">
        {goBackButton && (
          <button id="goBack-button" onClick={(e) => this.goBack()}><FaArrowLeft /></button>
        )}
        <h2>
          {showIcon && (<FaBookDead />)}
          &nbsp;{title}
        </h2>
      </div>
    )
  }
}

export default withRouter(Header)