export default function VideoCard(props) {
   const { video } = props
    return (
      <div className="VideoCard">
        <img src={video.snippet.thumbnails.default.url} alt={ video.snippet.title }/>
          <h4>{video.snippet.title}</h4>  
      </div>
    )
}
