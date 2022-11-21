import Comment from './Comment';
import CommentForm from './CommentForm';
// import { collection, doc, getDocs } from 'firebase/firestore';
// import { db } from '../firebase/config';
import { useVideo } from '../context/VideoContext';

function Comments({ videoId }) {
  const { comments } = useVideo();

  return (
    <div>
      {console.log('comments', comments)}
      <header>
        <h3>A list of comments</h3>
      </header>
      <main>
        <CommentForm videoId={videoId} />
        {/* filter over comments and show comments */}
        {comments.length > 0 &&
          comments
            .filter((comment) => comment.id === videoId)
            .map((comment, i) => {
              return <Comment key={comment.id + i} comment={comment} />;
            })}
      </main>
    </div>
  );
}

export default Comments;
