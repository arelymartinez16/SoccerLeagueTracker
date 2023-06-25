import Navbar from './components/Navbar';
import { useState, useEffect } from "react"
import Auth from './components/Auth';
import { useCookies } from 'react-cookie';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LeagueDetails from './components/LeagueDetails';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const authToken = cookies.AuthToken
  // const authToken = false;
  // const userEmail = cookies.Email
  // const [recentVideos, setRecentVideos] = useState(null)

  // const getRecentVideos = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8000/home");
  //     const json = await response.json()
  //     console.log(json)
  //     setRecentVideos(json)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  // displays Auth component when the user signs out
  const signOut = () => {
    removeCookie("Email")
    removeCookie("AuthToken")
  }

  // useEffect(() => {
  //   if (authToken) {
  //     getRecentVideos()
  //   }
  // }, [])

  return (
    <div className="App">
      {!authToken && <Auth />}
      {authToken && <> <Navbar />
      <button className='sign-out-button' style={{float: "right"}} onClick={signOut}>Sign out</button>
      <br />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<LeagueDetails />}/>
      </Routes>
      {/* <h1 className="welcome-text">Welcome back {userEmail}</h1>
      <h2 className="sub-title">Latest Highlights from All Over the World</h2> 
      {recentVideos && recentVideos.map(video => (
        <div className='video-container' key={video.matchviewUrl}>
          <div className="videos">
            <h3>{video.title}</h3>
            <p>{video.competition}</p>
            {video.videos.map((videoDetails) => (
              <div key={videoDetails.id} style={{width: "100%", height: "0px", position: "relative", paddingBottom: "56.250%", background: "#000"}}>
              <iframe title={videoDetails.id} src={videoDetails.embed?.substring(videoDetails.embed.indexOf("https"), videoDetails.embed.indexOf("fd'"))} width="100%" allowFullScreen style={{width: "100%", height: "100%", position: "absolute", left: "0px", top: "0px", overflow: "hidden"}}>

              </iframe>
              </div>
            ))}
          </div>
        </div>
            ))} */}</>}
    </div>
  );
}

export default App;
