import Navbar from './components/Navbar';
import { useState, useEffect } from "react"
import Auth from './components/Auth';
import { useCookies } from 'react-cookie';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  // const authToken = cookies.AuthToken
  const authToken = false;
  const userEmail = cookies.Email
  const [recentVideos, setRecentVideos] = useState(null)

  // const getData = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:8000/league/${userEmail}`)
  //     const json = await response.json()
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  /* useEffect(() => {
    if (authToken) {
      getData()
    }
  }, [])*/

  return (
    <div className="App">
      {!authToken && <Auth />}
      {authToken && <> <Navbar />
      <h1 className="welcome-text">Welcome back</h1>
      <h2 className="sub-title">Latest News</h2> </>}
    </div>
  );
}

export default App;
