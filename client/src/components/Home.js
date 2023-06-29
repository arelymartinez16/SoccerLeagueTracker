import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const Home = () => {
    const [recentVideos, setRecentVideos] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const userEmail = cookies.Email
    const authToken = cookies.AuthToken

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
        <>
            <h1 className="welcome-text">Welcome back {userEmail}</h1>
            <h2 className="sub-title">Latest Highlights from All Over the World</h2> 
            {recentVideos && recentVideos.map(video => (
                <div className='video-container' key={video.matchviewUrl}>
                    <div className="videos">
                        <h3>{video.title}</h3>
                        <p>{video.competition}</p>
                        {video.videos.map((videoDetails) => (
                            <div className="videos" key={videoDetails.id} style={{width: "100%", height: "0px", position: "relative", paddingBottom: "56.250%", background: "#000"}}>
                                <iframe title={videoDetails.id} src={videoDetails.embed?.substring(videoDetails.embed.indexOf("https"), videoDetails.embed.indexOf("fd'"))} width="100%" allowFullScreen style={{width: "100%", height: "100%", position: "absolute", left: "0px", top: "0px", overflow: "hidden"}}>

                                </iframe>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>  
    )


}

export default Home