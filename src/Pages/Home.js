// DEPENDENCIES
import { useEffect } from 'react';
import { useVideo } from '../context/VideoContext';

import SearchBar from '../components/SearchBar';
import NoVideos from '../components/NoVideos';
import VideoCards from '../components/VideoCards';

function Home() {
  // const [showVideos, setShowVideos] = useState(false);
  // const [videos, setVideos] = useState([]);

  const { videos, getVideos, setVideos, setShowVideos, showVideos } =
    useVideo();

  useEffect(() => {
    const x = window.localStorage.getItem('lastVideos');
    console.log(x);
    if (x) {
      setVideos(JSON.parse(x));
      setShowVideos(true);
    }
  }, [setVideos, setShowVideos]);

  return (
    <div className="Home">
      <SearchBar getVideos={getVideos} />

      {showVideos ? <VideoCards videos={videos} /> : <NoVideos />}
    </div>
  );
}

export default Home;
