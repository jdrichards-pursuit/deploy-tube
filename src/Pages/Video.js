// DEPENDENCIES
import YouTube from 'react-youtube'
import {Link, useParams} from 'react-router-dom'

// COMPONENTS
import Comments from '../Components/Comments'

export default function Video (props) {
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
        <Comments videoId={id} comments={props.comments} addComment={props.addComment}/>
        </main>
      </div>
    )
}
