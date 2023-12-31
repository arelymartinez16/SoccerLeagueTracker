// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Link, Routes, Route } from "react-router-dom";
import App from "../App";
import LeagueDetails from "./LeagueDetails";

const Navbar = () => {
    return (
        <>
            <div className="navbar-container">
                <nav className="navbar bg-body-tertiary border-bottom border-bottom-dark navbar-expand-lg navbar-expand-sm navbar-expand-md" data-bs-theme="dark">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">Soccer League Tracker</span>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link active" to="/livescores">Live Scores</Link></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Soccer Leagues
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" reloadDocument to="/ger.1">Bundesliga</Link></li> 
                                    <li><Link className="dropdown-item" reloadDocument to="/ned.1">Eredivisie</Link></li>
                                    <li><Link className="dropdown-item" reloadDocument to="/esp.1">La Liga</Link></li>
                                    <li><Link className="dropdown-item" reloadDocument to="/fra.1">Ligue 1</Link></li>
                                    <li><Link className="dropdown-item" reloadDocument to="/mex.1">Liga MX</Link></li>
                                    <li><Link className="dropdown-item" reloadDocument to="/eng.1">Premier League</Link></li>
                                    <li><Link className="dropdown-item" reloadDocument to="/por.1">Primeira Liga</Link></li>
                                    <li><Link className="dropdown-item" reloadDocument to="/ita.1">Serie A</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;