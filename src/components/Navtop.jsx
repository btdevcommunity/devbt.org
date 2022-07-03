import './navtop.scss';
import Logo from '../assets/images/logo.png';
import { Link } from "react-router-dom";

const Navtop = () => {
    return (
        <div className="navtop">
            <div className="topleft">
                <Link to="/">
                    <img  className= "logo" src={Logo} alt='logo' />
                </Link>
            </div>
            <div className="topcenter">Bhutan Dveloper Community</div>
            <div className="topright">
                <div className="topright-items">
                    <Link to="about"  style={{textDecoration:"none", color: "inherit" }}>
                        About
                    </Link>
                </div>
                <div className="topright-items">
                    <Link to="blog"  style={{textDecoration:"none", color: "inherit" }}>
                        Blog
                    </Link>
                </div>
                <div className="topright-items">
                    <Link to="events"  style={{textDecoration:"none", color: "inherit" }}>
                        Events
                    </Link>
                </div>
                <div className="topright-items">
                    <Link to="projects"  style={{textDecoration:"none", color: "inherit" }}>
                        Projects
                    </Link>
                </div>
                <div className="topright-items">
                    <Link to="donate"  style={{textDecoration:"none", color: "inherit" }}>
                        Donate
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Navtop;