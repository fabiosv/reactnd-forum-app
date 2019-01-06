import React, { Component } from 'react'
import {connect} from 'react-redux'
import './categories.css'
import {selectCategory} from '../../actions/categories'

class Categories extends Component {
  // removeItem = (todo) => {
  //   this.props.dispatch(handleDeleteTodo(todo))
  // }
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
            <button
              className={selectedCategory === 'all' ? 'button active' : 'button'}
              onClick={(e) => this.changeSelection('all')}
            >All Posts</button>
          </li>
          {categories.map((category) => (
            <li className='col-12' key={category.path}>
              <button
                className={selectedCategory === category.name ? 'button active' : 'button'}
                onClick={(e) => this.changeSelection(category.name)}
              >{category.name}</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect((state) => ({
  categories: state.categories,
  selectedCategory: state.selectedCategory,
}))(Categories)