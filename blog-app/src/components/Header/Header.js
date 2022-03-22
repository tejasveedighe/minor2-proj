import "./Header.css";
import profile from "./images/profile.png";
import { Routes, Route, Link } from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <div className="left">BlogHUB</div>
            <div className="center">
                <ul className="centerList">
                    <Link className="centerListItem" to="/">
                        Home
                    </Link>
                    <Link className="centerListItem" to="/about">
                        About
                    </Link>
                    <Link className="centerListItem" to="/write">
                        Write
                    </Link>
                    <Link className="centerListItem" to="/signin">
                        Sign In
                    </Link>
                </ul>
            </div>
            <div className="right">
                <img className="profile" src={profile} alt="profile" />
                <img
                    className="searchIcon"
                    src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
                    alt="search"
                />
            </div>
        </nav>
    );
}
