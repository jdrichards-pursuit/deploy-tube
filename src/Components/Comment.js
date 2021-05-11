function Comment (props) {
   const { comment} = props
    return (
        <div>
          <h4>{comment.name}</h4>
          <p>{comment.comment}</p>
        </div>
    )
  }

  export default Comment
