import Navbar from './components/Navbar';
import { useState, useEffect } from "react"
import Auth from './components/Auth';
import { useCookies } from 'react-cookie';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LeagueDetails from './components/LeagueDetails';
import Livescores from './components/Livescores';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const authToken = cookies.AuthToken

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
        <Route path="/livescores" element={<Livescores />}/>
      </Routes>
      </>}
    </div>
  );
}

export default App;
