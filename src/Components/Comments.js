import { Component } from 'react'
import Comment from './Comment'
import CommentForm from '../Components/CommentForm'

class Comments extends Component {
  render () {
    return (
      <div>
        <header>
          <h3>A list of comments</h3>
        </header>
        <main>
          <CommentForm addComment={this.props.addComment} videoId={this.props.videoId}/>
          {/* filter over comments and show comments */}
          {
            this.props.comments.filter(comment => comment.id === this.props.videoId ).map((comment, i) => {
              return (
                <Comment key={comment.id + i}  comment={comment}/>

              )
            })
          }
        </main>
      </div>
    )
  }
}

export default Comments
