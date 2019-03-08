import React, { Component } from "react"
import {connect} from "react-redux"
import "./categories.css"
import {selectCategory} from "../../../actions/categories"
import { Link, withRouter } from "react-router-dom"

class Categories extends Component {
  changeSelection = (new_selection) => {
    console.log(new_selection)
    this.props.dispatch(selectCategory(new_selection))
  }

  render(){
    const {categories, selectedCategory} = this.props;
    return(
      <div id="categories" className="col-3">
        <h4>Categories</h4>
        <ul>
          <li className="col-12">
            <Link to="/" className={selectedCategory === "all" ? "btn button active" : "btn button"}
              >All Posts</Link>
          </li>
          {categories.map((category) => (
            <li className="col-12" key={category.path}>
              <Link
                className={selectedCategory === category.name ? "btn button active" : "btn button"}
                to={`/${category.name}`}
              >{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default withRouter(connect((state) => ({
  categories: state.categories,
  selectedCategory: state.selectedCategory,
}))(Categories))