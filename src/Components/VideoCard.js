export default function VideoCard(props) {
   const { video } = props
    return (
      <div>
          <h4>{video.snippet.title}</h4>
          <img src={video.snippet.thumbnails.default.url} alt={ video.snippet.title }/>
      </div>
    )
}
