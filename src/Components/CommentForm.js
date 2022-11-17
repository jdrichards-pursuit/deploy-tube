import { useState } from 'react';
import { useVideo } from '../context/VideoContext';

function CommentForm({ videoId }) {
  const { comments, setComments } = useVideo();

  const [comment, setComment] = useState({
    id: videoId,
    name: '',
    comment: ''
  });

  const handleChange = (event) => {
    setComment({ ...comment, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updateComments = [...comments, comment];
    setComments(updateComments);
    setComment({ ...comment, name: '', comment: '' });
  };

  return (
    <div>
      <h3>Comment Form </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="your name"
          id="name"
          value={comment.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="comment">Comment:</label>
        <input
          type="text"
          placeholder="your comment"
          id="comment"
          value={comment.comment}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default CommentForm;
