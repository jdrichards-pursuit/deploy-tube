import Comment from './Comment';
import CommentForm from './CommentForm';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useVideo } from '../context/VideoContext';
import { useEffect } from 'react';
function Comments({ videoId }) {
  const { comments, setComments } = useVideo();

  useEffect(() => {
    const fetchComments = async () => {
      const data = await getDocs(collection(db, 'pursuit-tube-comments'));
      const res = await data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.div
      }));
      setComments(res);
    };
    fetchComments();
  }, []);
  return (
    <div>
      {console.log('comments', comments)}
      <header>
        <h3>A list of comments</h3>
      </header>
      <main>
        <CommentForm videoId={videoId} />
        {/* filter over comments and show comments */}
        {comments[0]?.comments.length > 0 &&
          comments[0].comments
            .filter((comment) => comment.id === videoId)
            .map((comment, i) => {
              return <Comment key={comment.id + i} comment={comment} />;
            })}
      </main>
    </div>
  );
}

export default Comments;
