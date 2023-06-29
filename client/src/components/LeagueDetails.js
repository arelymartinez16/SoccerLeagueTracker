import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useCookies } from "react-cookie";

// show standings, news and highlights from the league of the user's choice
const LeagueDetails = () => {
    const { id } = useParams();

    const [standingss, setStandings] = useState(null)
    const [news, setNews] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const authToken = cookies.AuthToken

    const displayStandings = async () => {
        try {
            const standing = await fetch(`http://localhost:8000/league/${id}`)
            const json = await standing.json();
            setStandings(json)
        } catch (err) {
            console.error(err)
        }
    } 

    const getLeagueName = (id) => {
        let leagueName = "";

        if (id === "eng.1") {
            leagueName = "premierleague"
        }
        else if (id === "mex.1") {
            leagueName = "ligabbvamxclausura"
        }
        else if (id === "ned.1") {
            leagueName = "eredivisie"
        }
        else if (id === "ita.1") {
            leagueName = "seriea"
        }
        else if (id === "fra.1") {
            leagueName = "ligue1ubereats"
        }
        else if (id === "ger.1") {
            leagueName = "bundesliga"
        }
        else if (id === "esp.1") {
            leagueName = "laliga"
        }
        else if (id === "por.1") {
            leagueName = "ligaportugal"
        }

        return {name: leagueName};
    }

    const displayNews = async () => {
        try {
            const { name } = getLeagueName(id)
            const recentNews = await fetch(`http://localhost:8000/news/${name}`)
            const json = await recentNews.json()
            setNews(json)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect( () => {
        const fetchData = async () => {
            if (authToken) {
                await displayStandings()
                await displayNews()
            }
        }

        fetchData()
    }, []) 

    return (
        <>
            <h1>League {id}</h1>
            <div className="standings-container">
                <h2>Standings</h2>
                <table className="tables">
                    <thead>
                        <tr>
                            <th>Team Name</th>
                            <th>GP</th>
                            <th>L</th>
                            <th>GD</th>
                            <th>Pts</th>
                            <th>GA</th>
                            <th>GF</th>
                            <th>D</th>
                            <th>W</th>
                            <th>PD</th>
                            <th>PPG</th>
                            <th>Rank</th>
                            <th>RC</th>
                            <th>Overall Record</th>
                        </tr>
                    </thead>
                    <tbody>
                        {standingss && standingss.map(stand => (
                            <tr key={stand.team.id}>
                                <td>{stand.team.name}</td>
                                {stand.stats.map((stat, index) => ( 
                                    <td key={index}>{stat.displayValue}</td>
                                ))} 
                            </tr> 
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="news-container" style={{float: "right"}}>
                <h2 className="title-news" style={{color: "black"}}>Recent News</h2>
                {news && news.map((recentNew, index) => (
                    <div className="news-card" key={index}>
                        <h3>{recentNew.Title}</h3>
                        <a href={recentNew.NewsLink} target="_blank">{recentNew.NewsLink}</a>
                        <p>{recentNew.PublisherDate}</p>
                    </div>
                ))}
            </div> 
        </>
    )
}

export default LeagueDetails