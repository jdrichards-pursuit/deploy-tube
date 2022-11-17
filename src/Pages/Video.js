import YouTube from 'react-youtube';
import { Link, useParams } from 'react-router-dom';
import Comments from '../Components/Comments';

export default function Video() {
  const { id } = useParams();
  return (
    <div className="Video">
      <header>
        <Link to="/">Go Back</Link>
      </header>
      <main>
        <YouTube videoId={id} />
        <Comments videoId={id} />
      </main>
    </div>
  );
}
