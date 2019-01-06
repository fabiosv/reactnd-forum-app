import React, { Component } from 'react'
import {connect} from 'react-redux'
import './categories.css'

class Categories extends Component {
  // removeItem = (todo) => {
  //   this.props.dispatch(handleDeleteTodo(todo))
  // }

  render(){
    const {categories} = this.props;
    return(
      <div id='categories' className='col-3'>
        <h4>Categories</h4>
        <ul>
          <li className='col-12'><button className='button active'>All Posts</button></li>
          {categories.map((category) => (
            <li className='col-12' key={category.path}>
              <button className='button'>{category.name}</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect((state) => ({
  categories: state.categories,
}))(Categories)