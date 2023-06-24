// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary border-bottom border-bottom-dark navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Soccer League Tracker</span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Soccer Leagues
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="">Bundesliga</a></li>
                            <li><a className="dropdown-item" href="">Eredivisie</a></li>
                            <li><a className="dropdown-item" href="">La Liga</a></li>
                            <li><a className="dropdown-item" href="">Ligue 1</a></li>
                            <li><a className="dropdown-item" href="">Liga MX</a></li>
                            <li><a className="dropdown-item" href="">Premier League</a></li>
                            <li><a className="dropdown-item" href="">Primeira Liga</a></li>
                            <li><a className="dropdown-item" href="">Serie A</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;