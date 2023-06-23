import Navbar from './components/Navbar';
import { useState, useEffect } from "react"
import Auth from './components/Auth';
import { useCookies } from 'react-cookie';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  // const authToken = cookies.AuthToken
  const authToken = true;
  const userEmail = cookies.Email
  const [recentVideos, setRecentVideos] = useState(null)

  const getRecentVideos = async () => {
    try {
      const response = await fetch("http://localhost:8000/home");
      const json = await response.json()
      setRecentVideos(json)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (authToken) {
      getRecentVideos()
    }
  }, [])

  return (
    <div className="App">
      {!authToken && <Auth />}
      {authToken && <> <Navbar />
      <h1 className="welcome-text">Welcome back</h1>
      <h2 className="sub-title">Latest News & Highlights</h2> </>}
      {recentVideos && recentVideos.map(video => (
        <div className='video-container' key={video.videos.id}>
          <div className="videos">
            <h3>{video.title}</h3>
            <p>{video.competition}</p>
            <video controls>
              {video.videos.embed}
            </video>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
