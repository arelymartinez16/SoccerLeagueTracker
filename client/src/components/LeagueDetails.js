import { useState } from "react"
import { useParams } from "react-router-dom"

// show standings, news and highlights from the league of the user's choice
const LeagueDetails = () => {
    const { id } = useParams();

    const [standings, setStandings] = useState(null)

    const displayStandings = async () => {
        try {
            const standings = await fetch("http://localhost:8000/league/:id")
            const json = await standings.json()
            setStandings(json)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <h1>League {id}</h1>
    )
}

export default LeagueDetails