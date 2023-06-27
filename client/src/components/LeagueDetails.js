import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useCookies } from "react-cookie";

// show standings, news and highlights from the league of the user's choice
const LeagueDetails = () => {
    const { id } = useParams();

    const [standingss, setStandings] = useState(null)
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

    useEffect( () => {
        if (authToken) {
            displayStandings()
        }
    }, []) 

    return (
        <>
            <h1>League {id}</h1>
            <h2>Standings</h2>
            {standingss && standingss.map(standing => (
                <div className="standings-container" key={standing.team.id}>
                    <p>{standing.team.name}</p>
                    {standing.stats.map(stat => (
                        <div>
                            <p>{stat.name}</p>
                            <p>{stat.displayValue}</p>
                        </div>
                    ))}
                </div>
            ))}
            {/* standingss && standingss.map(standing => (
                <div key={standing++}>
                    {standing.standings.map(stand => (
                        <div key={stand.id}>
                            <p>{stand.id}</p>
                        </div>
                    ))}
                </div>
                    )) */}
            
        </>
    )
}

export default LeagueDetails