import React, { Component } from "react"
import {connect} from "react-redux"
import * as Alert from "../../utils/alertController"
import PostCard from "../components/post/postCard"
import {handlePostScoredUp, handlePostScoredDown, handleDeletePost} from "../../actions/posts"
import {handleReceivePostInfo} from "../../actions/posts"
import {handleFetchPostComments} from "../../actions/comments"
import Header from "../components/commons/header"
import Loader from "../components/commons/loader"
import ConnectedCommentsContainer from "../components/comment/commentsContainer"


class PostDetail extends Component {
  state ={}

  componentDidMount(){
    const {dispatch} = this.props
    const {id} = this.props.match.params
    dispatch(handleReceivePostInfo(id))
    dispatch(handleFetchPostComments(id))
  }

  onScoreUp = (post_id) => {
    this.props.dispatch(handlePostScoredUp(post_id))
  }

  onScoreDown = (post_id) => {
    this.props.dispatch(handlePostScoredDown(post_id))
  }

  onDelete = (post) => {
    Alert.showConfirmAlert("You won't be able to revert this! T.T")
    .then((result) => {
      if(result.value) {
        this.props.dispatch(handleDeletePost(
          post,
          () => {
            Alert.showAlert("Post Deleted!", true)
            this.props.history.push("/")
            // this.props.history.goBack()
          }
        ))
      }
    })
  }

  isPostFounded = () => {
    const { posts } = this.props;
    const { category } = this.props.match.params;
    console.log(posts)
    if(posts.length > 0) {
      return posts[0].category === category
    }
    return false
  }

  render(){
    const { posts, loading } = this.props;
    const { id, category } = this.props.match.params;
    console.log(posts)
    return(
      <div>
        <Header title={"Post Details"} goBackButton={true} showIcon={false} />
        <Loader loading={loading}/>
        {!loading && !this.isPostFounded()
          ? (
            <div>404 Post Not Found :(</div>
          )
          : (posts.map((post) => (
            <div className="col-md-8 offset-md-2" key={post.id}>
              <PostCard
                post={post}
                onScoreUp={this.onScoreUp}
                onScoreDown={this.onScoreDown}
                onDelete={this.onDelete}/>
              <ConnectedCommentsContainer parentID={id} category={category}/>
            </div>
          )))
        }
      </div>
    )
  }
}

export default connect((state) => ({
  posts: state.posts,
  comments: state.comments,
  loading: state.loading
}))(PostDetail)