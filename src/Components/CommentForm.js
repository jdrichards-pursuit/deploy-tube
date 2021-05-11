
export default function CommentForm (props) {
  // send submit back up
  // control input here
  // similar to search bar
    return (
        <div>
            <h3>Comment Form </h3>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" placeholder="your name" id="name"/>
              <br />
              <label htmlFor="comment">Comment:</label>
              <input type="text" placeholder="your comment" id="comment" />
              <input type="submit" />
            </form>
        </div>
    )
  }
