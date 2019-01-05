import React, { Component } from 'react'
import { connect } from 'react-redux'
import './mainPage.css'

class MainPage extends Component {
  state = {}

  render(){
    console.log(this.props);
    const {categories} = this.props;
    return(
      <div>
        <div id='categories'>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Teste 2</li>
            {/* {categories.map((category) => (
              <li key={category.path}>category.name</li>
            ))} */}
          </ul>
        </div>
        <div id='posts'>
            <div id='post'></div>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({
  categories: state.categories,
  posts: state.posts
}))(MainPage)