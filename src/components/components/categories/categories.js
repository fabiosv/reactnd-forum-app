import React, { Component } from 'react'
import {connect} from 'react-redux'
import './categories.css'
import {selectCategory} from '../../../actions/categories'
import { Link, withRouter } from 'react-router-dom'

class Categories extends Component {
  changeSelection = (new_selection) => {
    console.log(new_selection)
    this.props.dispatch(selectCategory(new_selection))
  }

  render(){
    const {categories, selectedCategory} = this.props;
    return(
      <div id='categories' className='col-3'>
        <h4>Categories</h4>
        <ul>
          <li className='col-12'>
            <Link to="/" className={selectedCategory === 'all' ? 'btn button active' : 'btn button'}
              >All Posts</Link>
            <a href="/" className={selectedCategory === 'all' ? 'btn button active' : 'btn button'}
              >All Posts</a>
          </li>
          {categories.map((category) => (
            <li className='col-12' key={category.path}>
              <a
                className={selectedCategory === category.name ? 'btn button active' : 'btn button'}
                href={`/${category.name}`}
              >{category.name}</a>
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