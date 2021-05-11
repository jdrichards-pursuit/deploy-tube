// DEPENDENCIES
import React from 'react'
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
          <h1>A Single Video Page </h1>

        </header>
        <main>
          <h1>VIDEO LOADS HERE</h1>
          <h2>with an ID of {id}</h2>
          <CommentForm />
          <Comments />
        </main>
      </div>
    )
}

      // <Route path="video/id" children={Video}><VideoCard id={1}/></Route>
