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
            <div className="standings-container">
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
        </>
    )
}

export default LeagueDetails