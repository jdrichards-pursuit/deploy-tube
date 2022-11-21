import { createContext, useState, useContext, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
export const VideoContext = createContext();
export const useVideo = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [video, setVideo] = useState('');
  const [videos, setVideos] = useState([]);
  const [showVideos, setShowVideos] = useState(false);

  function setLastVideos(res) {
    window.localStorage.setItem('lastVideos', JSON.stringify(res));
  }

  function getVideos(searchCriteria) {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&kind=video&q=${searchCriteria}&key=${process.env.REACT_APP_API_KEY}`;
    const search = window.localStorage.getItem(searchCriteria);

    if (search) {
      console.log('used LocalStorage');
      setLastVideos(JSON.parse(search));
      setVideos(JSON.parse(search));
      setShowVideos(true);
    } else {
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          console.log('I fetched from API');
          if (response.items.length === 0) {
            setShowVideos(false);
          } else {
            window.localStorage.setItem(
              searchCriteria,
              JSON.stringify(response.items)
            );
            setLastVideos(response.items);
            setVideos(response.items);
            setShowVideos(true);
          }
        })
        .catch((error) => console.error(error));
    }
  }

  // function addComment(obj) {
  //   const updateComments = [...comments, obj];
  //   setComments(updateComments);
  // }

  useEffect(() => {
    const fetchComments = async () => {
      const data = await getDocs(collection(db, 'pursuit-tube-comments'));
      const res = await data.docs.map((doc) => ({
        ...doc.data()
      }));

      console.log('res', res);
      if (res.length > 0) setComments(res[0].comments);
    };
    fetchComments();
  }, []);
  return (
    <VideoContext.Provider
      value={{
        comments,
        setComments,
        video,
        setVideo,
        videos,
        setVideos,
        getVideos,
        showVideos,
        setShowVideos
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
