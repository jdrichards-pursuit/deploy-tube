// DEPENDENCIES
import YouTube from 'react-youtube'
import {Link, useParams} from 'react-router-dom'

// COMPONENTS
import CommentForm from '../Components/CommentForm'
import Comments from '../Components/Comments'

export default function Video () {
  let {id} = useParams()
    return (
      <div className="Video">
        <header>
          <Link to="/">Go Back</Link>
        </header>
        <main>
          <YouTube
            videoId={id}
          />
          <CommentForm />
          <Comments />
        </main>
      </div>
    )
}
