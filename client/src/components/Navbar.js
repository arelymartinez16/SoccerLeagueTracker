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
            <nav className="navbar bg-body-tertiary border-bottom border-bottom-dark navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Soccer League Tracker</span>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Soccer Leagues
                            </a>
                            <ul className="dropdown-menu">
                                {/* <li><a className="dropdown-item" href="">Bundesliga</a></li> */}
                                <li><Link className="dropdown-item" to="/ger.1">Bundesliga</Link></li> 
                                {/* <li><a className="dropdown-item" href="">Eredivisie</a></li> */}
                                <li><Link className="dropdown-item" to="/ned.1">Eredivisie</Link></li>
                                {/* <li><a className="dropdown-item" href="">La Liga</a></li> */}
                                <li><Link className="dropdown-item" to="/esp.1">La Liga</Link></li>
                                {/* <li><a className="dropdown-item" href="">Ligue 1</a></li> */}
                                <li><Link className="dropdown-item" to="/fra.1">Ligue 1</Link></li>
                                {/* <li><a className="dropdown-item" href="">Liga MX</a></li> */}
                                <li><Link className="dropdown-item" to="/mex.1">Liga MX</Link></li>
                                {/* <li><a className="dropdown-item" href="">Premier League</a></li> */}
                                <li><Link className="dropdown-item" to="/eng.1">Premier League</Link></li>
                                {/* <li><a className="dropdown-item" href="">Primeira Liga</a></li> */}
                                <li><Link className="dropdown-item" to="/por.1">Primeira Liga</Link></li>
                                {/* <li><a className="dropdown-item" href="">Serie A</a></li> */}
                                <li><Link className="dropdown-item" to="/ita.1">Serie A</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/:id" element={<LeagueDetails />}/>
            </Routes>
        </>
    )
}

export default Navbar;