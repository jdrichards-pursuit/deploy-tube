import Comment from './Comment'

export default function Comments () {
    return (
      <div>
        <header>
          <h3>A list of comments</h3>
        </header>
        <main>
          <Comment />
          <Comment />
          <Comment />
        </main>
      </div>
    )
}
