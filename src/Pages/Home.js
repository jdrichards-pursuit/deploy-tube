// DEPENDENCIES
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

import { useVideo } from '../context/VideoContext';

import SearchBar from '../Components/SearchBar';
import NoVideos from '../Components/NoVideos';
import VideoCards from '../Components/VideoCards';

function Home() {
  const {
    videos,
    getVideos,
    setVideos,
    setShowVideos,
    showVideos,
    setComments
  } = useVideo();

  useEffect(() => {
    const x = window.localStorage.getItem('lastVideos');

    if (x) {
      setVideos(JSON.parse(x));
      setShowVideos(true);
    }
  }, [setVideos, setShowVideos]);

  useEffect(() => {
    console.log('I ran in home for comments');
    const fetchComments = async () => {
      const data = await getDocs(collection(db, 'pursuit-tube-comments'));
      const res = await data.docs.map((doc) => ({
        ...doc.data()
      }));

      console.log('res home', res);
      if (res.length > 0) setComments(res[0].comments);
    };
    fetchComments();
  }, [setComments]);

  return (
    <div className="Home">
      <SearchBar getVideos={getVideos} />

      {showVideos ? <VideoCards videos={videos} /> : <NoVideos />}
    </div>
  );
}

export default Home;
